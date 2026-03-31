import './src/app.js';

const { joinVoiceChannel } = require('@discordjs/voice');

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content === '!join') {
        if (!message.member.voice.channel) {
            return message.reply('Bạn chưa vào voice!');
        }

        const channel = message.member.voice.channel;

        joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        message.reply('Đã vào room 🔥');
    }
});
