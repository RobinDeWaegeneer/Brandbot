const discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new discord.MessageEmbed()
            .setColor(0xFF4500)
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
            .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
            .setTimestamp()

        message.channel.send(embed);
    }
module.exports.help = {
    name: "meme",
    aliases: ["memes"]
}