const discord = require("discord.js");

module.exports.run = async(bot, message) => {
       let brandEmbed = new discord.MessageEmbed()
       .setTitle("BrandList")
       .setDescription("Here you can find all brands of the bot.")
       .setColor(0xFF4500)
       .addField("**Car🚗**","`Mercedes`\n`BMW`\n`Ferrari`\n`Tesla`", true)
       .addField("**Clothing🧦**","`Nike`\n`Adidas`\n`Champion`",true)
       .addField("**Music**🎵","`Spotify`\n`Soundcloud`\n`Itunes`",true)
       .addField("**Food🍟**","`McDonalds`\n`Dominos`\n`KFC`",true)
       .addField("**Drinks🍺**","`Coca Cola`\n`Lipton`\n`PepsiCo`",true)
       .addField("**Watch📺**","`Netflix`\n`Disney+`\n`Youtube`",true)
       .addField("**Toys🎲**","`Lego`\n`Playmobil`\n`Little Tikes`",true)
       .addField("**Gaming🎮**","`Nintendo`\n`Ea`\n`Riot Games`",true)
       .addField("**Computer Science💻**","`Apple`\n`Microsoft`\n`MSI`",true)
       .setFooter("Still in progress, more will be coming soon!")
       .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
       .setTimestamp()
     message.channel.send(brandEmbed)

    /*if (args[1]) {
      switch(args[1].toLowerCase()) {
        case 'car':
            const carEmbed = new discord.MessageEmbed()
            .setTitle('test')
            message.channel.send(carEmbed);
        default: 
            const embedError = new discord.MessageEmbed()
            .setTitle('error')
            message.channel.send(embedError); 
    }  */

}





module.exports.help = {
    name:"brands",
    aliases: ["brandlist","brand"]
}