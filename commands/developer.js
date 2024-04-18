const discord = require("discord.js");

module.exports.run = async (bot, message) => {
  let developerEmbed = new discord.MessageEmbed()
    .setTitle("Developers")
    .setDescription(
      "These are the people who worked very hard on this bot! :clap:"
    )
    .addField(
      "Developers",
      "Founder & Dev: `McSpeedBros#0566`\nBot Dev: `CookieSlime#5002`"
    )
    .setColor(0xff4500)
    .setFooter(
      "Thanks for asking if you wish to use any of our work in your project. Using our work without our permission will fall under copyright infringement and will be subject to Belgian laws."
    );
  message.channel.send(developerEmbed);
};

module.exports.help = {
  name: "developers",
  aliases: [""],
};
