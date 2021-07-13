client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "say") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You Dont Have `MANAGE_MESSAGES` Permission .**");
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "Please Check My Role Permission To `MANAGE_MESSAGES`"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "say <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${args}`)
      .setFooter(`By ${message.author.tag}`);
    message.channel.send(embed);
  }
})
