const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "stats",
  aliases: ["stats"],
  cooldown: 8,
  description: "** Invite Calms,bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://cdn.discordapp.com/emojis/827810082850340885.gif`)
    .setTitle(`CAlms is One`)
    .setDescription(`
<a:emoji_17:850611627321327617> OWNER BOT <@767108799785598977> <a:emoji_1:848805449155215391>
<a:emoji_16:850611586921398283>
<:g_:850633528697159710> [GitHub](https://github.com/dev-REDZONE)
<a:emoji_16:850611586921398283>
[Server Support](https://discord.gg/vWKsHCNQce)
<a:emoji_16:850611586921398283>
[Sponcar Server](https://discord.gg/jokerstaff)
<a:emoji_16:850611586921398283>
[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=828921463348264982&permissions=2184576832&scope=bot)`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("<a:emoji_27:847407354005291018>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
