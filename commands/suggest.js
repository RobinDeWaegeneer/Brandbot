const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    const suggest = args.slice(1).join(' ');
    if (!suggest) return message.channel.send("Please Insert an Idea");
    const suggestEmbed = new discord.MessageEmbed()
        .setTitle("New Idea")
        .setColor(0xFF4500)
        .addField("Idea: ", suggest)
        .addField("Send by: ", message.author)
        .addField("Send to", 'Suggestions Channel || Support Server')
        .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
        .setTimestamp()
        
    const suggestionsChannel = bot.channels.cache.get("719136635010416660") 
    if (!suggestionsChannel) return message.guild.send("Can't find channel"); 

    suggestionsChannel.send(suggestEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
}

module.exports.help = {
    name: "suggest",
    aliases:["sugg"]
}