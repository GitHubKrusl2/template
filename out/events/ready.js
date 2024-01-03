"use strict";
const deploy_commands_1 = require("../deploy-commands");
module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        if (process.argv.includes("--sync")) {
            await (0, deploy_commands_1.syncCommands)();
        }
        console.log("Ready!");
    }
};
