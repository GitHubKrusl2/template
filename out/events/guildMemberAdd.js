"use strict";
const discord_js_1 = require("discord.js");
const config_json_1 = require("../json/config.json");
module.exports = {
    name: discord_js_1.Events.GuildMemberAdd,
    async execute(member) {
        const role = member.guild.roles.cache.get(config_json_1.greetingRoleId);
        if (!role)
            return;
        await member.roles.add(role);
        const channel = member.guild.channels.cache.get(config_json_1.greetingChannelId);
        if (!channel)
            return;
        await channel.send(`**<@${member.user.id}> только что присоединился. Добро пожаловать!**`);
    },
};
