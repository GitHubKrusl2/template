import { ModalBuilder, TextInputBuilder, ActionRowBuilder } from "@discordjs/builders";
import { TextInputStyle } from "discord.js";

export function embedSetupModal() {
    const titleInput = new TextInputBuilder()
        .setCustomId("titleInput")
        .setLabel("Заголовок")
        .setPlaceholder("Опционально")
        .setMaxLength(256)
        .setMinLength(1)
        .setRequired(false)
        .setStyle(TextInputStyle.Short);

    const descriptionInput = new TextInputBuilder()
        .setCustomId("descriptionInput")
        .setLabel("Описание")
        .setPlaceholder("Обязательно")
        .setMaxLength(2048)
        .setMinLength(1)
        .setRequired(true)
        .setStyle(TextInputStyle.Paragraph);

    const colorInput = new TextInputBuilder()
        .setCustomId("colorInput")
        .setLabel("Цвет")
        .setPlaceholder("Опционально (В формате: #000000)")
        .setMaxLength(7)
        .setMinLength(1)
        .setRequired(false)
        .setStyle(TextInputStyle.Short);

    const imageInput = new TextInputBuilder()
        .setCustomId("imageInput")
        .setLabel("Изображение (По центру снизу")
        .setPlaceholder("Опционально")
        .setMaxLength(128)
        .setMinLength(1)
        .setRequired(false)
        .setStyle(TextInputStyle.Short);

    const thumbnailInput = new TextInputBuilder()
        .setCustomId("thumbnailInput")
        .setLabel("Миниатюра (Справа вверху)")
        .setPlaceholder("Опционально")
        .setMaxLength(128)
        .setMinLength(1)
        .setRequired(false)
        .setStyle(TextInputStyle.Short);

    const titleActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(titleInput);
    const descriptionActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(descriptionInput);
    const colorActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(colorInput);
    const imageActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(imageInput);
    const thumbnailActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(thumbnailInput);

    const modal = new ModalBuilder()
        .setCustomId("embedSetupModal")
        .setTitle("Настройка эмбеда")
        .addComponents(titleActionRow, descriptionActionRow, colorActionRow, imageActionRow, thumbnailActionRow);

    return modal;
    
}