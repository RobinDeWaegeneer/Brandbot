const discord = require("discord.js");

module.exports.run = async(bot, message, prefix) => {

    let helpEmbed = new discord.MessageEmbed()

    .setTitle("**Command List**")
    .setDescription("Here You Can Find All Commands,\n The prefix for the bot is `b!`\n [Support Server](https://discord.gg/QwD5jfRDp4)") 
    .setColor(0xFF4500)
    .addField("**Brand**","`Brands`,`Developers`,`Suggest`,\n`Bugreport`,`Invite`",true)
    .addField("**Info 📚**", "`Serverinfo`,`Botinfo`,`Profile`,\n`Ping`",true)
    .addField("**Tools 🛠**","`Math`,`Translate`",true)
    .addField("**Fun 🎈**","`Counting`,`Meme`,`rps`",true)
    .addField("**Economy 💶**","`Balance`,`Pay`,`Baltop`,\n`earn`",true)
    .addField("**Moderation 🔑**","`PrefixDisable`,`ServerPrefix`",true)
    .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(helpEmbed)

    
}

module.exports.help = {
    name: "help",
    aliases: ["commands","cmd","cmds","Help","Commands"]
} 