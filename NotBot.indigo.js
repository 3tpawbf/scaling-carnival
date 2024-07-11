




const fs = require('fs');
const { Client, Collection, GatewayIntentBits, Partials, EmbedBuilder, Permissions } = require('discord.js');
const { token } = require('null');


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
    .setURL('null')
    .setAuthor({ name: `null`, iconURL: guildMember.displayAvatarURL({ dynamic: true }), url: 'null' })
    .setThumbnail(`null`)
    .setDescription('null')
    .setImage(`null`)
    .setTimestamp()
    .setFooter({ text: 'null', iconURL: `null` });

  guildMember.guild.channels.cache.get('null').send({ embeds: [embed7] })
});

client.on('guildMemberRemove', async (GuildMember) => {
  console.log(GuildMember);

});

client.on('guildMemberRemove', guildMember => {
  const embed8 = new EmbedBuilder()

    .setColor(0x0099FF)
    .setTitle('null')
    .setURL('null')
    .setAuthor({ name: `null`, iconURL: guildMember.displayAvatarURL({ dynamic: true }), url: 'null' })
    .setThumbnail(`null`)
    .setDescription('null')
    .setImage(`null`)
    .setTimestamp()
    .setFooter({ text: '"null', iconURL: `null` });

  guildMember.guild.channels.cache.get('null').send({ embeds: [embed8] })
});


const randommagnasson = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const sendRandomMsgmagnasson = () => {

  client.channels.cache.get('null').send(randomMsgmagnasson[randommagnasson(0, randomMsgmagnasson.length - 1)]);
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


console.log('null');



client.login(token);
