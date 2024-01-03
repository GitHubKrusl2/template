"use strict";
const discord_js_1 = require("discord.js");
module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
        if (interaction.type === discord_js_1.InteractionType.ApplicationCommand) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command)
                return;
            await command.execute(interaction);
            return;
        }
        if (interaction.type !== discord_js_1.InteractionType.ApplicationCommandAutocomplete) {
            const interactions = interaction.client.interactions;
            if (!interactions.has(interaction.customId))
                return;
            await interactions.get(interaction.customId)(interaction);
        }
    }
};
