const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong! (trust)'),
    async execute(interaction) {
        await interaction.reply('Fuck you!');
    },
};
