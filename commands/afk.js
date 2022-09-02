const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
    var kullanıcı = message.author;
    var sebep = args.slice(0).join("  ");
    
      if (!sebep) return message.channel.send("lüften bir sebep gir"
      );
      const row = new Discord.ActionRowBuilder()
      .addComponents(
new Discord.ButtonBuilder()
.setLabel("Eminim")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("He")

      )
message.reply({content: "Emin Misiniz?", components: [row]}).then(msg => {
    msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
        if (interaction.customId == "He") {
    msg.delete()
        message.channel.send("basarili")
        
      db.set(`afk_${kullanıcı.id}`, sebep);
        }
    })
})
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "afk"
};
