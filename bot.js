const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535501730910175253")
setInterval(function() {
channel.send(`HERO HERO HERO HERO HERO HERO`);
}, 30)
})

client.login(process.env.BOT_TOKEN);