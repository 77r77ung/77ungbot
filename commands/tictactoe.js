const { SlashCommandBuilder, EmbedBuilde } = require('@discordjs/builders');

module.exports = {
    name: '오목',
    description: '간이 오목으로 붙어랑 ฅ^•ﻌ•^ฅ',
    permission: 'members',
    secret: false,
    options: [
        {
            name: '맞짱 뜰 사람',
            description: '너 옥상으로 따라와',
            type: 'USER',
            required: true
        }
    ],
    
};