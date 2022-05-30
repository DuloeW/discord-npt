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


client.on('messageCreate', message => {
    console.log(message.content)
    if (message.content === '+ping') {  
        message.channel.send(`🏓Latency is ${message.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
});