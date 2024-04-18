const discord = require('discord.js')

module.exports.run = async(bot, message) => {

    let inviteEmbed = new discord.MessageEmbed()

    .setTitle('Bot Invite')
    .setColor(0xFF4500)
    .setDescription('Here is a link to invite Brand Bot to your own server \n or you can join our support server to be updated about the lastest bot updates!')
    .addField("Invite Bot","[Invite Link](https://discord.com/api/oauth2/authorize?client_id=718598093729431596&permissions=8&scope=bot)")
    .addField("Support Server","[Support Server](https://discord.gg/QwD5jfRDp4)")
    .setFooter('Thanks for your support!')
    message.channel.send(inviteEmbed)
}

module.exports.help = {
    name: 'invite',
    aliases: ['Invite']
}