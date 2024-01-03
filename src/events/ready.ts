import { syncCommands } from "../deploy-commands";
import { Client } from "discord.js";

export = {
    name: "ready",
    once: true,
    async execute(client: Client) {
        if (process.argv.includes("--sync")) {
            await syncCommands();
        }
        console.log("Ready!");
    }
}