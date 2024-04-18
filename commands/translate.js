const discord = require("discord.js");
const translate = require("translate-google")

module.exports.run = async(bot, message, args) => {
    message.channel.send('Still in Progress')
}
module.exports.help = {
    name: "translate",
    aliases: ["tl","convert","Translate"]
}