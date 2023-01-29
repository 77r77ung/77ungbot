module.exports = {
    name: "messageCreate",
    once: false,
    execute(message){
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
            
            const randommsg = ["이규리 바보", "이소연 바보", "이재혁 바보", "이재혁 바보", "이교준 바보",
                "황준석 바보", "김채연 바보", "최민준 바보", "주태준 바보"]
            const random = Math.floor(Math.random() * randommsg.length)
            if (message.content === "바보") {
                //console.log('출력 중')
                message.channel.send( {content : `${randommsg[random]}`} )
            }
        } catch (error){
            console.error(error);
        }
    }
}