// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection } = require('discord.js');
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

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('[Notice] Ready.')
    
    client.user.setActivity({
        name: "그루밍"
    })
});

client.on('messageCreate', (message) => {
    try{
        const hello = ["안녕", "안뇽", "안농", "안녕하세요",
            "하이", "하위", "하윙", "해윙", "해위", "ㅎㅇ",
            "인사", "안니영", "ㅇㄴㅇ", "반갑고",
            "규하", "소하", "교하", "넉하", "채하", "태하", "재하", "쭌하"];
        hello.forEach(word => {
            if (message.content.toLowerCase().includes(word)) {
                message.channel.send("안냥 ฅ^•ﻌ•^ฅ");
            }
        });

        const bye = ["잘가", "잘 가", "바이", "바위",
            "규바", "소바", "교바", "넉바", "채바", "태바", "재바", "쭌바"];
        bye.forEach(word => {
            if (message.content.toLowerCase().includes(word)) {
                message.channel.send("냥안 ฅ^•ﻌ•^ฅ");
            }
        });

        const goodnight = ["잘자", "잘 자", "굿밤", "굿 밤", "굿나잇"];
        goodnight.forEach(word => {
            if (message.content.toLowerCase().includes(word)) {
                message.channel.send("고양이 꿈 꿔 ฅ^•ﻌ•^ฅ");
            }
        });
    } catch (error){
        console.error(error);
    }
})

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
    } catch (e) {
        console.error(error);
        await interaction.reply({ content: '무슨 말인지 모른당! ฅ^•ﻌ•^ฅ'})
    }
})

//Login to Discord with your client's token
client.login(token)