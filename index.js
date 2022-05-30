// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login("OTc2NTA5MDk1MTE5MDQ0NjA4.GkovpX.jJlVXJJXFK93X0wTl0jBYppmUky4yMjPmW0NEY");

let soal = Math.round(Math.random() * 20);

client.on('messageCreate', message => {
    /*console.log(message.content)
    if (message.content === '+ping') {  
        message.channel.send(`🏓Latency is ${message.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }else if(message.content === '+perkenalan'){
        message.channel.send('Hallo saya bot yang dibuat oleh bayu pada 30 Mei 2022 - 11.30pm')
    }*/

    if (message.author.bot) return
            if (parseInt(message.content) === soal){
                message.channel.send('Kamu Benar jawabannya ' + soal)
                soal = Math.round(Math.random() * 20);
            }else if (parseInt(message.content) > soal) {
                message.channel.send('Terlalu besar')
            }else if (parseInt(message.content) < soal) {
                message.channel.send('Terlalu kecil');
            }else if (message.content === 'Nyerah' || message.content === 'nyerah') {
                message.channel.send('Jawabannya adalah ' + soal)
                soal = Math.round(Math.random() * 20);
            }
    
});