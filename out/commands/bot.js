"use strict";
const discord_js_1 = require("discord.js");
const builders_1 = require("@discordjs/builders");
const ButtonComponents_1 = require("../components/ButtonComponents");
const EmbedComponents_1 = require("../components/EmbedComponents");
const ModalComponents_1 = require("../components/ModalComponents");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName("bot")
        .setDescription("Управление ботом")
        .addSubcommand(subcommand => subcommand
        .setName("ping")
        .setDescription("Пинг бота"))
        .addSubcommand(subcommand => subcommand
        .setName("say")
        .setDescription("Сказать что-то")
        .addStringOption(option => option
        .setName("text")
        .setDescription("Текст")
        .setRequired(true)))
        .addSubcommand(subcommand => subcommand
        .setName("uptime")
        .setDescription("Время работы бота"))
        .addSubcommand(subcommand => subcommand
        .setName("embed")
        .setDescription("Отправить эмбед"))
        .setDefaultMemberPermissions(1),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case "ping":
                await interaction.reply({ embeds: [(0, EmbedComponents_1.pingEmbed)(interaction.client)], components: [(0, ButtonComponents_1.refreshButton)("Ping")] });
                interaction.client.interactions.set("refreshPingButton", (interaction) => {
                    interaction.update({ embeds: [(0, EmbedComponents_1.pingEmbed)(interaction.client)] });
                });
                break;
            case "say":
                const text = interaction.options.getString("text");
                await interaction.channel.send({ content: text });
                await interaction.reply({ content: (0, discord_js_1.bold)("Сообщение отправлено"), ephemeral: true });
                break;
            case "uptime":
                await interaction.reply({ embeds: [(0, EmbedComponents_1.uptimeEmbed)(interaction)], components: [(0, ButtonComponents_1.refreshButton)("Uptime")] });
                interaction.client.interactions.set("refreshUptimeButton", (interaction) => {
                    interaction.update({ embeds: [(0, EmbedComponents_1.uptimeEmbed)(interaction)] });
                });
                break;
            case "embed":
                await interaction.showModal((0, ModalComponents_1.embedSetupModal)());
                interaction.client.interactions.set("embedSetupModal", async (interaction) => {
                    const title = interaction.fields.getTextInputValue("titleInput");
                    const description = interaction.fields.getTextInputValue("descriptionInput");
                    const color = interaction.fields.getTextInputValue("colorInput");
                    const image = interaction.fields.getTextInputValue("imageInput");
                    const thumbnail = interaction.fields.getTextInputValue("thumbnailInput");
                    if (color && !/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(color.replace(" ", ""))) {
                        await interaction.reply((0, EmbedComponents_1.errorEmbed)("Неверный формат цвета", "Цвет должен быть в формате #000000"));
                        return;
                    }
                    const embed = new discord_js_1.EmbedBuilder()
                        .setDescription(description);
                    if (title)
                        embed.setTitle(title);
                    if (color)
                        embed.setColor(color);
                    if (image)
                        embed.setImage(image);
                    if (thumbnail)
                        embed.setThumbnail(thumbnail);
                    await interaction.reply({ embeds: [embed] });
                });
        }
    }
};
