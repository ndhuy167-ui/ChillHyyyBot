import './src/app.js';

const { joinVoiceChannel } = require('@discordjs/voice');

client.once('ready', () => {
    const channel = client.channels.cache.get("1481730637575487662");

    if (channel) {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        console.log("Đã vào voice 🔥");
    } else {
        console.log("Không tìm thấy room");
    }
});
