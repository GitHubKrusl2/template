"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedSetupModal = void 0;
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
function embedSetupModal() {
    const titleInput = new builders_1.TextInputBuilder()
        .setCustomId("titleInput")
        .setLabel("Заголовок")
        .setPlaceholder("Опционально")
        .setMaxLength(256)
        .setMinLength(1)
        .setRequired(false)
        .setStyle(discord_js_1.TextInputStyle.Short);
    const descriptionInput = new builders_1.TextInputBuilder()
        .setCustomId("descriptionInput")
        .setLabel("Описание")
        .setPlaceholder("Обязательно")
        .setMaxLength(2048)
        .setMinLength(1)
        .setRequired(true)
        .setStyle(discord_js_1.TextInputStyle.Paragraph);
    const colorInput = new builders_1.TextInputBuilder()
        .setCustomId("colorInput")
        .setLabel("Цвет")
        .setPlaceholder("Опционально (В формате: #000000)")
        .setMaxLength(7)
        .setMinLength(1)
        .setRequired(false)
        .setStyle(discord_js_1.TextInputStyle.Short);
    const imageInput = new builders_1.TextInputBuilder()
        .setCustomId("imageInput")
        .setLabel("Изображение (По центру снизу")
        .setPlaceholder("Опционально")
        .setMaxLength(128)
        .setMinLength(1)
        .setRequired(false)
        .setStyle(discord_js_1.TextInputStyle.Short);
    const thumbnailInput = new builders_1.TextInputBuilder()
        .setCustomId("thumbnailInput")
        .setLabel("Миниатюра (Справа вверху)")
        .setPlaceholder("Опционально")
        .setMaxLength(128)
        .setMinLength(1)
        .setRequired(false)
        .setStyle(discord_js_1.TextInputStyle.Short);
    const titleActionRow = new builders_1.ActionRowBuilder().addComponents(titleInput);
    const descriptionActionRow = new builders_1.ActionRowBuilder().addComponents(descriptionInput);
    const colorActionRow = new builders_1.ActionRowBuilder().addComponents(colorInput);
    const imageActionRow = new builders_1.ActionRowBuilder().addComponents(imageInput);
    const thumbnailActionRow = new builders_1.ActionRowBuilder().addComponents(thumbnailInput);
    const modal = new builders_1.ModalBuilder()
        .setCustomId("embedSetupModal")
        .setTitle("Настройка эмбеда")
        .addComponents(titleActionRow, descriptionActionRow, colorActionRow, imageActionRow, thumbnailActionRow);
    return modal;
}
exports.embedSetupModal = embedSetupModal;
