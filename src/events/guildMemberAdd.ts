import { GuildMember, TextChannel } from 'discord.js';
import { Events } from 'discord.js';
import { greetingRoleId, greetingChannelId } from '../json/config.json';

export = {
    name: Events.GuildMemberAdd,
    async execute(member: GuildMember) {
        const role = member.guild.roles.cache.get(greetingRoleId);
        if (!role) return;
        await member.roles.add(role);

        const channel = member.guild.channels.cache.get(greetingChannelId) as TextChannel;
        if (!channel) return;
        await channel.send(`**<@${member.user.id}> только что присоединился. Добро пожаловать!**`);
    },
};