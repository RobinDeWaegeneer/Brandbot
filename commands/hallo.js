const discord = require("discord.js");

module.exports.run = async (bot, message) => {
   
        message.channel.send('hallokes')    
}

module.exports.help = {
    name: "hallo",
    aliases: ["hi"]
}