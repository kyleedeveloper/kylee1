const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setDescription(`**!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n**!yardım eğlence |** Eğlence Komutlarını Gösterir.\n\n**!yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n\n**!yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n**!yardım bot |** Bot Komutlarını Gösterir\n\n**!yardım giveaway |** Giveaway Komutlarını Gösterir\n\n**!yardım ticket |** Ticket Komutlarını Gösterir\n\n**!yardım rol-verici |** Rol verici Komutlarını Gösterir\n\n**!yardım öneri |** Öneri Komutlarını Gösterir\n\n**!yardım özel-oda |** Özel Oda Komutlarını Gösterir\n**Kylee Bağlantılar**\n[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("Ana Komutlar")
.setDescription("**!istatistik |** Botun istatistiklerini gösterir\n**!linkler |** Botla Alakalı Linkleri Alırsınız\n**!oyver |** Botun oy verme linkini ve birkaç bilgi alırsınız\n**!ping |** Botun pingini gösterir")
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("Yetkili Komutları")
.setDescription("**!ban | ** Etiketlediğiniz kişiyi sunucudan yasaklar\n**!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**!kick |** İstediğiniz kişiyi sunucudan atar\n**!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**!temizle |** Belirtilen miktar mesajı siler\n**!unban |** Belirtilen kişinin banını kaldırır\n**!slowmode** | Kanalda yavaşmod'u ayarlarsınız")
message.channel.send({embeds: [embed2]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("Eğlence Komutları")
.setDescription("**!alkış |** Bot Alkışlar\n**!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**!emojiyazı |** Bot mesajınızı emoji haline getirir\n**!hackle |** Etiketlediğiniz kişiyi hackler\n**!kaçcm |** Malafatının uzunluğunu söyler\n**!snipe |** Son silinen mesajı tekrar atar\n**!snake |** Yılan oyunu oynatır")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**!slot |** Slots oyununu oynar\n**!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
message.channel.send({embeds: [embed2]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("Kullanıcı Komutları")
.setDescription("**!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**!atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**!avatar |** Etiketlediğiniz kişinin avatarını gösterir\n**!emojiler |** Sunucuda bulunan emojileri gösterir\n**!hesapla |** Belirtilen işlemi yapar\n**!kurucu-kim |** Sunucunun kurucusunu söyler")
message.channel.send({embeds: [embed]})
const embed2 = new diskord.EmbedBuilder()
.setDescription("**!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir\n**!not-al |** Bot not alır\n**!notum |** Notunuzu gösterir\n**!radyo |**  Sesli kanaldan Radyo dinlersiniz\n**!sunucubilgi |** Bulunduğun sunucu hakkında bilgi verir")
message.channel.send({embeds: [embed2]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("ayarlamalı Komutları")
.setDescription("**!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**!sa-as |** Oto sa-ası ayarlarsınız\n**!sayaç |** Sayacı ayarlarsınız")
message.channel.send({embeds: [embed]})
}
if(value === "ticket") {
  const embed = new diskord.EmbedBuilder()
  .setTitle("ticket (slash) Komutları")
  .setDescription("**/ticket info |** Ticket komutları hakkında bilgi verir\n**/ping |** Botun pingini ölçer\n**/kategori |** Ticketin açılacağı kanalı belirler\n**/kanala-gonder |** Ticket panelini kanala gönderir\n**/transcript-ayarla |** Transcripti atar\n**/Ticket |** Ticket Açarsınız\n**/kapat |** Ticketi kapatıp siler")
  message.channel.send({embeds: [embed]})
  }
  if(value === "giveaway") {
    const embed = new diskord.EmbedBuilder()
    .setTitle("giveaway Komutları")
    .setDescription("****!başlat |** Çekiliş başlatmanıza yardım eder\n**!bitir |** Çekilişi bitirmenize ayrdım eder\n**!reroll |** Çekiliş kazananlarını tekrar çeker")
    message.channel.send({embeds: [embed]})
    }
    if(value === "rol-verici") {
      const embed = new diskord.EmbedBuilder()
      .setTitle("Rol Verici Komutları")
      .setDescription("**!buton-rol |** Butonlu bir şekilde kullanıcıya rol verici\n**!menülü-rol |** Menülü bir şekilde kullanıcıya rol verici")
      message.channel.send({embeds: [embed]})
      }
    if(value === "öneri") {
      const embed = new diskord.EmbedBuilder()
      .setTitle("Öneri Komutları")
      .setDescription("**!öneri-log |** Önerilerin gideceği kanalı ayarlamanıza yardım eder\n**!öner |** Öneri vermenize yardım eder")
      message.channel.send({embeds: [embed]})
      }
    if(value === "özel-oda") {
      const embed = new diskord.EmbedBuilder()
      .setTitle("Özel Oda Komutları")
      .setDescription("**!özel-oda-sistemi |** Özel oda oluşturucu kanalını ayarlar\n**!kullanıcı-menü |** Özel odalar için kullanıcı menüsünü gösterir\n**!özel-oda-sil |** Özel odayı siler")
      message.channel.send({embeds: [embed]})
      }
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}