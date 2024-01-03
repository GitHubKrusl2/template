export default function getTime(): string {
    return new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });;
}