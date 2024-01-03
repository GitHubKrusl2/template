import { bold, ButtonInteraction, ChatInputCommandInteraction, ColorResolvable, EmbedBuilder, ModalSubmitInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { refreshButton } from "../components/ButtonComponents";
import { errorEmbed, pingEmbed, uptimeEmbed } from "../components/EmbedComponents";
import { embedSetupModal } from "../components/ModalComponents";

export = {
    data: new SlashCommandBuilder()
        .setName("bot")
        .setDescription("Управление ботом")
        .addSubcommand(subcommand =>
            subcommand
                .setName("ping")
                .setDescription("Пинг бота"))
        .addSubcommand(subcommand =>
            subcommand
                .setName("say")
                .setDescription("Сказать что-то")
                .addStringOption(option =>
                    option
                        .setName("text")
                        .setDescription("Текст")
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName("uptime")
                .setDescription("Время работы бота"))
        .addSubcommand(subcommand => 
            subcommand
                .setName("embed")
                .setDescription("Отправить эмбед"))
        .setDefaultMemberPermissions(1),
    async execute(interaction: ChatInputCommandInteraction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case "ping":
                await interaction.reply({ embeds: [pingEmbed(interaction.client)], components: [refreshButton("Ping")] });
                interaction.client.interactions.set("refreshPingButton", (interaction: ButtonInteraction) => {
                    interaction.update({ embeds: [pingEmbed(interaction.client)] });
                })
                break;
            case "say":
                const text = interaction.options.getString("text");
                await interaction.channel.send({ content: text });
                await interaction.reply({ content: bold("Сообщение отправлено"), ephemeral: true });
                break;
            case "uptime":
                await interaction.reply({ embeds: [uptimeEmbed(interaction)], components: [refreshButton("Uptime")] });
                interaction.client.interactions.set("refreshUptimeButton", (interaction: ButtonInteraction) => {
                    interaction.update({ embeds: [uptimeEmbed(interaction)] });
                })
                break;
            case "embed":
                await interaction.showModal(embedSetupModal());
                interaction.client.interactions.set("embedSetupModal", async (interaction: ModalSubmitInteraction) => {
                    const title = interaction.fields.getTextInputValue("titleInput");
                    const description = interaction.fields.getTextInputValue("descriptionInput");
                    const color = interaction.fields.getTextInputValue("colorInput");
                    const image = interaction.fields.getTextInputValue("imageInput");
                    const thumbnail = interaction.fields.getTextInputValue("thumbnailInput");

                    if (color && !/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(color.replace(" ", ""))) {
                        await interaction.reply(errorEmbed("Неверный формат цвета", "Цвет должен быть в формате #000000"));
                        return;
                    }

                    const embed = new EmbedBuilder()
                        .setDescription(description)

                    if (title) embed.setTitle(title);
                    if (color) embed.setColor(color as ColorResolvable);
                    if (image) embed.setImage(image);
                    if (thumbnail) embed.setThumbnail(thumbnail);

                    await interaction.reply({ embeds: [embed] });
                })
        }
    }
}