const discord = require("discord.js");
const { promptMessage } = require("../functions");



module.exports.run = async (bot, message) => {
    const chooseArr = ["🗻", "📰", "✂"];

    const embed = new discord.MessageEmbed()
        .setColor(0xFF4500)
        .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
        .setDescription("Add a reaction to one of these emojis to play the game!")
        .setTimestamp();
    const m = await message.channel.send(embed);
    await m.react("🗻")
    await m.react("📰")
    await m.react("✂")
    
    const reacted = await promptMessage(m, message.author, 0, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = getResult(reacted, botChoice);

    await m.reactions.removeAll();

    embed
        .setDescription("")
        .addField(result, `${reacted} vs ${botChoice}`);

    m.edit(embed);

    function getResult(me, botChosen) {
        if ((me === "🗻" && botChosen === "✂") ||
            (me === "📰" && botChosen === "🗻") ||
            (me === "✂" && botChosen === "📰")) {
            return "You won!";
        } else if (me === botChosen) {
            return "It's a tie!";
        } else {
            return "You lost!";
        }
    }
}

module.exports.help = {
    name: "rps",
    aliases: ["rockpaperscissors"]
}