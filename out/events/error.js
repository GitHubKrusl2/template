"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const discord_js_1 = require("discord.js");
const getTime_1 = __importDefault(require("../utils/getTime"));
module.exports = {
    name: discord_js_1.Events.Error,
    execute(error) {
        console.log(`Произошла ошибка в ${(0, getTime_1.default)()}:\n- Название: ${error.name}\n- Сообщение: ${error}\n- Стек: ${error.stack ?? "Не указан"}`);
    }
};
