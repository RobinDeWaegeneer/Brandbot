const botConfig = require("./botconfig.json");
const discord = require("discord.js");
const fs = require("fs");
const { config } = require("process");
const bot = new discord.Client();

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

// if(command.permissions.length){
//   let invalidPerms = []
//   for(const perm of command.permissions){
//     if(!validPermissions.includes(perm)){
//       return console.log(`Invalid Permissions ${perm}`);
//     }
//     if(!message.member.hasPermission(perm)){
//       invalidPerms.push(perm);
//     }
//   }
//   if (invalidPerms.length){
//     return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
//   }
// }

/*File Reader*/
fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  const jsfiles = files.filter((f) => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) {
    console.log("No Files Found");
    return;
  }

  jsfiles.forEach((f, i) => {
    const config = require(`./commands/${f}`);
    bot.commands.set(config.help.name, config);
    config.help.aliases.forEach((aliases) => {
      bot.aliases.set(aliases, config.help.name);
    });
  });
});
/*--------------------------------------*/
/*State Of Bot*/
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity(`b!help`, { type: "PLAYING" });
});
/*--------------------------------------------*/
/*Join message*/
bot.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.find(
    (channel) => channel.name === "✌-welcome"
  );
  if (!channel) return;

  channel.send(
    `Welcome To Brand Bot Server, ${member}, please read rules first!`
  );
});

/*--------------------------------------*/
bot.on("message", async (message) => {
  if (!message.content.startsWith(botConfig.prefix)) return;
  let args = message.content.substring(botConfig.prefix.length).split(" ");
  let messageArray = message.content.split(" ");
  let command = messageArray[0];

  /*let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
*/
  let commandfile =
    bot.commands.get(command.slice(botConfig.prefix.length)) ||
    bot.commands.get(bot.aliases.get(command.slice(botConfig.prefix.length)));
  if (commandfile) commandfile.run(bot, message, args, command);
});

/*---------------------*/
fs.readdir("./Brands/", (err, files) => {
  if (err) console.log(err);

  let jsfiles = files.filter((f) => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) {
    console.log("No Brands Found");
    return;
  }
  jsfiles.forEach((f, i) => {
    let props = require(`./Brands/${f}`);

    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach((alias) => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.login(botConfig.token);
