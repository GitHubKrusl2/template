"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTime() {
    return new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
    ;
}
exports.default = getTime;
