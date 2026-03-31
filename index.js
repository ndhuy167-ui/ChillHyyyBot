import './src/app.js';

const { joinVoiceChannel } = require('@discordjs/voice');

client.once('ready', async () => {
    console.log(`Bot online: ${client.user.tag}`);

    const channel = client.channels.cache.get("ID_ROOM_VOICE");

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
