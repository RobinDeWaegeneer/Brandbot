const discord = require("discord.js");

module.exports.run = async(bot, message) => {
        message.channel.send("Checking for ping...").then(m => {
          let ping = m.createdTimestamp - message.createdTimestamp
          /*let botping = Math.round(bot.ping)*/
          m.edit(`Pong! Command ping is ${ping}ms`)
        })
}
module.exports.help = {
    name:"ping",
    aliases: ["pong"]
}