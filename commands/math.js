const discord = require("discord.js");
const math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    
        if (!args[1]) return message.channel.send('Please input a calculation');

        let resp;
        let input = args[1]

        try {
            resp = math.evaluate(input);
        } catch (e) {
            return message.channel.send('Sorry, please input a valid calculation.');
        }
        const embed = new discord.MessageEmbed()
            .setColor(0xFF4500)
            .setTitle('Math Calculation')
            .addField('Input', `\`\`\`css\n${input}\`\`\``)
            .addField('Output', `\`\`\`css\n${resp}\`\`\``)
            .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
            .setTimestamp()

        message.channel.send(embed);

}

module.exports.help = {
    name:"math",
    aliases: ["calc","calculate"]
}