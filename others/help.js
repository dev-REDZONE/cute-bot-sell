
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
    .setImage(``)
    .setTitle(`Calms Is One`)
    .setDescription(`
*** | Prefix bot*** 
***__=__***

*** | User Commands***


 invite ・ support(supp)・ uptime ・ prefix
 ping ・ invites・avatar ・ se
 ・user

 ***|Mod commnads***



 lock ・ unlock ban ・ unban
 clear・kick ・channelinfo
 vkick・
 slowmode・invites ・createchannel
deletechannel ・benner ・ count
hightRole ・ rooms ・

***| Gif Commands***

boy gif ・ love gif・girl gif ・ sad gif・meme 

***  | Game gif Commands***


boom ・ rps ・slots

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

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000")
   message.react("<:2_:863362568801222656>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

