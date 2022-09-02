const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const gizlilik = config.politika
  const embed = new EmbedBuilder()
.setTitle("Kylee Bağlantılar")
.setDescription(`[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Gizlilik Politikası](${gizlilik})`)
.setColor("#ff0000")
message.channel.send({embeds: [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "linkler"
};
