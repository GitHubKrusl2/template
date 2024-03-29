import { bold, EmbedBuilder } from "@discordjs/builders";
import { ButtonInteraction, ChatInputCommandInteraction,Client, Colors, InteractionReplyOptions } from "discord.js";

export function errorEmbed(message: string, error?: string): InteractionReplyOptions {
    return {
        embeds: [
            new EmbedBuilder()
                .setTitle('Ошибка!')
                .setDescription(error ? bold(`${message}: ${error}`) : bold(message))
                .setColor(Colors.Red)
                .setTimestamp()
        ], ephemeral: true
    };
}

export function successEmbed(message: string, isEphemeral: boolean = true): InteractionReplyOptions {
    return {
        embeds: [
            new EmbedBuilder()
                .setDescription(bold(message))
                .setColor(Colors.Green)
                .setTimestamp()
        ], ephemeral: isEphemeral
    };
}

export function pingEmbed(client: Client): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle(`Пинг бота: ${client.ws.ping} миллисекунд`)
        .setColor(Colors.Green)
}

export function uptimeEmbed(interaction: ButtonInteraction | ChatInputCommandInteraction): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle(`**Бот работает ${Math.floor(interaction.client.uptime / 1000 / 60 / 60)} часов ${Math.floor(interaction.client.uptime / 1000 / 60 % 60)} минут ${Math.floor(interaction.client.uptime / 1000 % 60)} секунд**`)
        .setColor(Colors.Green)
}