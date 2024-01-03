import { Events } from "discord.js";
import getTime from "../utils/getTime";

export = {
    name: Events.Error,
    execute(error: Error) {
        console.log(`Произошла ошибка в ${getTime()}:\n- Название: ${error.name}\n- Сообщение: ${error}\n- Стек: ${error.stack ?? "Не указан"}`)
    }
}