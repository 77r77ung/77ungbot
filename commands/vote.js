const { SlashCommandBuilder } = require('@discordjs/builders');
const { DiscordAPIError } = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('투표')
        .setDescription('투표로 정해라냥 ฅ^•ﻌ•^ฅ'),
    async execute(interaction) {
        const embed = new DiscordAPIError.MessageEmbed()
        .setTitle(" 😼🗳 ")
        .setDescription(" 변수 ")
        .setColor("")
    },
};