const discord = require("discord.js");

module.exports.run = async (bot, message) => {
  const devembed = new discord.MessageEmbed()

    .setTitle(`👏 Developers, Staff & Credits`)
    // .setColor()
    .setDescription(
      "These are the people that work very hard on me.\n \n **Founder & dev**: `Bratatat#9999` \n **Database Dev**: `Shino#1337` \n **Maintainers**: `Aura#0448`, `Yeho#8490` \n \n **What am i used for?** \n I am here to help moderate the server and i am also responsible for the whole LevelSystem! You can also use me to see some interesting details about the server for ex. the amount off members in each role or the amount off invites you have. "
    )
    .setFooter(
      "Thanks for asking if you wish to use any of our work in your project. Using our work without our \npermission will fall under copyright infringement and will be subject to Belgian laws."
    );
  message.channel.send(devembed);
};

module.exports.help = {
  name: "dev",
  aliases: ["devs"],
};
