
const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands Calms,Bot**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/861001166582448139/864930027442274304/standard.gif`)
    .setTitle(`Calms Is One`)
    .setDescription(`
*** | Prefix bot*** 
***__=__***

*** | User Commands***

 invite ・ support(supp)・ uptime ・ prefix
 ping ・ invites・avatar ・ se ・ server
 user ・ about ・ status ・ qsay

 ***|Mod commnads***

 lock ・ unlock ban ・ unban
 clear・kick ・channelinfo
 vkick・
 slowmode・invites ・createchannel
deletechannel ・benner ・ count
hightRole ・ rooms ・

***| Gif Commands***

boy gif ・ love gif・girl gif

***  | Game gif Commands***

boom ・ rps ・slots

*** | Fun Commands
kiss ・ slap ・ meme ・ hug

*** | Game Commands***

rps・slots・stone・paper・scissors・kill



***| Music Commands***
play ・ skip・lyrics
nowplaying・skipto・ stop
volume・nowplaying ・ resume
shuffle ・ search ・remove
queue ・ filter ・ radio・loop

**Links**
[SUPPORT](https://discord.gg/jokerstaff)       [INVITE](https://discord.com/api/oauth2/authorize?client_id=828921463348264982&permissions=2184576832&scope=bot)
`)
    Top.gg Links
      [Website] (https://top.gg/bot/828921463348264982)- [Vote] (https://top.gg/bot/828921463348264982/vote)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000")
   message.react("<:2_:863362568801222656>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

