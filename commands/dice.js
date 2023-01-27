const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('주사위')
        .setDescription('주사위를 굴려랑 ฅ^•ﻌ•^ฅ'),
    async execute(interaction) {
        const dicenum1 = Math.ceil(Math.random() * 6)
        const dicenum2 = Math.ceil(Math.random() * 6)
        console.log(dicenum1)
        console.log(dicenum2)
        let result = "";
        if (dicenum1 > dicenum2){
            result = "🎉 1번 주자";
        } else if (dicenum1 < dicenum2){
            result = "🎉 2번 주자";
        } else if (dicenum1 === dicenum2) {
            result = "한 판 더!";
        }

        const dice_resultEmbed = new EmbedBuilder()
            .setColor([255, 153, 187])
            .setTitle("옛다, 결과 ฅ^•ﻌ•^ฅ")
            .addFields(
                { name: '🎷 두구두구둥', value: `${result}` },
                { name: '\u200B', value: '\u200B' },
                { name: '1번 주자', value: `💁🏻🎲 ${dicenum1}`, inline: true },
                { name: '2번 주자', value: `💁🏻‍♂️🎲 ${dicenum2}`, inline: true },
            )
        console.log(dice_resultEmbed)

        await interaction.reply({ embeds: [dice_resultEmbed] });
    },
};