




const fs = require('fs');
const { Client, Collection, GatewayIntentBits, Partials, EmbedBuilder, Permissions } = require('discord.js');
const { token } = require('./configtoki.json');


const { Guilds, GuildMembers, MessageContent, GuildMessages } = GatewayIntentBits;


const { User, Message, Channel, GuildMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
  partials: [User, Channel, Message, GuildMember],
});

client.on('guildMemberAdd', async (GuildMember) => {
  console.log(GuildMember);});
client.on('guildMemberAdd', guildMember => {
  const embed7 = new EmbedBuilder()

    .setColor(0x0099FF)
    .setTitle('null')
    .setURL('https://paypal.me/tripbranch')
    .setAuthor({ name: `${guildMember.user.username} joined today`, iconURL: guildMember.displayAvatarURL({ dynamic: true }), url: 'https://paypal.me/tripbranch' })
    .setThumbnail(`/Users/bombs/3 VR/PNGs/¡¡¡ßøMßs!!!.png`)
    .setDescription('It appears they have decided to live amongst the cyber-teddies')
    .setImage(`/Users/bombs/3 VR/PNGs/tanooki_teddy.png`)
    .setTimestamp()
    .setFooter({ text: 'null', iconURL: `null` });

  guildMember.guild.channels.cache.get('1248982604338954341').send({ embeds: [embed7] })
});

client.on('guildMemberRemove', async (GuildMember) => {
  console.log(GuildMember);

});

client.on('guildMemberRemove', guildMember => {
  const embed8 = new EmbedBuilder()

    .setColor(0x0099FF)
    .setTitle('Shy Shy Teddy\'s Cyberspace')
    .setURL('https://paypal.me/tripbranch')
    .setAuthor({ name: `${guildMember.user.username} left today`, iconURL: guildMember.displayAvatarURL({ dynamic: true }), url: 'https://paypal.me/tripbranch' })
    .setThumbnail(`/Users/bombs/3 VR/PNGs/YOKO.png`)
    .setDescription('It appears they have decided to leave the land of the cyber-teddies')
    .setImage(`/Users/bombs/3 VR/PNGs/yink.png`)
    .setTimestamp()
    .setFooter({ text: '"May the cyber-waifus look over you", Shy Shy Teddy', iconURL: `/Users/bombs/3 VR/PNGs/YOOKA.png` });

  guildMember.guild.channels.cache.get('11955448490473636445').send({ embeds: [embed8] })
});


const randommagnasson = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const sendRandomMsgmagnasson = () => {

  client.channels.cache.get('1248982604338954341').send(randomMsgmagnasson[randommagnasson(0, randomMsgmagnasson.length - 1)]);
}

setInterval(function () { sendRandomMsgmagnasson() }, 1000 * 10 * 2 );

const randomMsgmagnasson = [ 
'CHARLOTTE',
'ANCHORAGE',
'TAIPEI',
'ARAGUAINA',
'CONAKRY',
'BOGOTA',
'MOSCOW',
'TOKOYO',
'YELLOWKNIFE',
'ANADYR',
'HAMBURG',
'ATIKOKAN',
'MIAMI',
 ]


console.log('༼ง ◉ _ ◉༽ง');



client.login(token);
