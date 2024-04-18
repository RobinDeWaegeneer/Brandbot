const discord = require("discord.js");

module.exports.run = async(bot, message, prefix, command) => {
    
        let countEmbed = new discord.MessageEmbed()

        .setTitle("**Counting Channel 🔥**")
        .setDescription("```Go to The counting🔥 channel and count your way up with other members! This is Thanks to Pepe Bot.(available Brand World)```") 
        .setColor(0xFF4500)
        .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(countEmbed)
}

module.exports.help = {
    name:"counting",
    aliases: ["count"]
}