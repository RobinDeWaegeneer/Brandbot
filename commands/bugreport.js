const discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

const bugreport = args.slice(1).join(" ");


if (!bugreport) return message.channel.send('Please insert a bug!')
const bugreportembed = new discord.MessageEmbed()
   .setTitle('BugReport Brand Bot')
   .setColor(0xFF4500)
   .addField("Bug: ", bugreport)
   .addField("Send By: ", message.author)
   .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
   .setTimestamp()

message.author.send(bugreportembed) && bot.users.fetch('216342376128446465').then((user) => {
    user.send(bugreportembed)
}) 
}

module.exports.help = {
    name: "bugreport",
    aliases:['Bugreport','BugReport']
}