const discord = require("discord.js");

module.exports.run = async(bot, message) => {

       let servericon = message.guild.iconURL("./Images/car.png")
       let region = message.guild.region
       let serverembed = new discord.MessageEmbed()
       .setTitle("Server Information")
       .setColor(0xFF4500)
       .setThumbnail(servericon)
       .addField("**Brand Server**", `${message.guild.name} (${message.guild.nameAcronym})`, true)
       .addField("**Server Owner**", message.guild.owner, true)
       .addField("**Region**", region)
       .addField("**Member Count**", message.guild.memberCount)
       .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
       .setTimestamp()

       return message.channel.send(serverembed)
    }

module.exports.help = {
    name:"serverinfo",
    aliases: ["server","Server"]
}