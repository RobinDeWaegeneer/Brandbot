const discord = require("discord.js");
const { version } = require("mathjs");

module.exports.run = async (bot, message) => {
        let embed = new discord.MessageEmbed()
            .setTitle("Your Profile")
            .addField("Profile Name", message.author.username, true)
            .addField("Version", version, true)
            .addField("Current Server", message.guild.name, true)
            .setThumbnail(message.author.displayAvatarURL())
            .setColor(0xFF4500)
            .setFooter("Still in Progress")
            .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
            .setTimestamp()
        message.channel.send(embed)
}

module.exports.help = {
    name: "profile",
    aliases: ["pr", "me","Profile"],
}