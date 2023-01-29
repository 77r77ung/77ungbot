// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

// Event Handling
const eventsPath = "./events"
const eventFiles = fs
    .readdirSync(eventsPath)
    .filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = `./${eventsPath}/${file}`
    const event = require(filePath)
    if (event.once == true) {
        client.once(event.name, (...args) => event.execute(...args))
    } else {
        client.on(event.name, (...args) => event.execute(...args))
    }
}

// SlashCommand Handling
client.commands = new Collection();
// file system을 통해서 ./commands 폴더에 있는 모든 파일을 불러 들어 filter를 적용(파일명 끝이 .js로 끝나는 파일만 불러옴)
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    // .js 파일 안에 정의되어 있는 Slashcommand의 내용을 command 변수 안에 저장
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return; // command가 존재하지 않으면 아무것도 실행하지 않음

    try{
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: '무슨 말인지 모른당! ฅ^•ﻌ•^ฅ'})
    }
})

//Login to Discord with your client's token
client.login(token)