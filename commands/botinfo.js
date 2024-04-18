const discord = require("discord.js");

module.exports.run = async(bot, message) => {        
    /*let boticon = bot.user.displayAvatarURL("/Images/botlogo.PNG");*/
    /*const botCreated = this.user.createdAt*/
    let botembed = new discord.MessageEmbed()
    .setTitle("**Bot Info**")
    .setDescription("This is information about Brand Bot")
    .setColor(0xFF4500)
    .setThumbnail("https://cdn.discordapp.com/attachments/718618439304085605/773665610885365770/botlogo.PNG")
    .addField("**Bot Name**", bot.user.tag)
    .addField("**Bot Created Date**", bot.user.createdAt)
    .addField("**Servers**", bot.guilds.cache.size)
    .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(botembed)
}
module.exports.help = {
    name:"botinfo",
    aliases: ["bot"]
}