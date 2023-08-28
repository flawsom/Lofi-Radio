const { MessageEmbed, MessageActionRow, MessageSelectMenu, CommandInteraction, Client } = require('discord.js');

const { MessageButton} = require("discord.js");

module.exports = {
  name: 'help',
  description: `Show Lofi Radio's help menu.`,
  userPrams: [],
  botPrams: ['EMBED_LINKS'],

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {
    const prefix = client.prefix;

    await interaction.deferReply({
      ephemeral: false,
    });





    

    const embed = new MessageEmbed()
        .setColor(`#ffa0a0`)
          .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL(), url: `https://discord.gg/islacafe` })

          .setDescription(`
<:notes:1145228360897802240> **Music:**
<:blank:1145228295592489032><:next:1145228356892246028> **/play:** Joins your voice channel and starts playing 24/7.
<:blank:1145228295592489032><:stop:1145228389901406299> **/stop:** Leaves the voice channel.
<:blank:1145228295592489032><:dvd:1145228306166317138> **/song:** Shows the current playing song.
<:blank:1145228295592489032><:radio:1145228373812056074> **/station:** Changes the radio station/theme.
<:blank:1145228295592489032><:loud:1145228347949981757> **/volume:** Shows or changes the current volume.
<:blank:1145228295592489032><:sleep:1145228377800847371> **/sleep:** Sets a sleep timer.
<:star:1145228385925222492> **Profiles:**
<:blank:1145228295592489032><:profile:1145228369231884290> **/profile:** Shows your profile.
<:blank:1145228295592489032><:am:1145228293369516033> **/remove:** Removes the liked song.
<:blank:1145228295592489032><:floppy_disk:1145228318606630932> **/collection:** Shows your liked songs collection.
<:config:1145228299841314877> **Config:**
<:blank:1145228295592489032><:mode:1145228352408539157> **/mode:** Switches between radio modes.
<:blank:1145228295592489032><:dj:1145228303880433754> **/djrole:** Sets which roles are considered DJs.
<:blank:1145228295592489032><:gear:1145228322587037716> **/settings:** Shows and configures server settings.
<:blank:1145228295592489032><:premium:1145228365356343336>  **/premium:** Shows information about Lofi Radio premium.
<:info:1145228335438372914> **Info:**
<:blank:1145228295592489032><:telegram:1145228392485109770> **/support:** Send us a message or [Join](https://discord.gg/islacafe) our support server.
<:blank:1145228295592489032><:like:1145228343285915719> **/follow:** [Follow](https://www.instagram.com/vibes.him/) Follow SiMi's Creator.
<:blank:1145228295592489032><:invite:1145228339263590412> **/invite:** [Invite](https://discord.com/api/oauth2/authorize?client_id=1145226299221213184&permissions=8&scope=applications.commands%20bot) Lofi Radio to your server.
`)

const b1 = new MessageButton().setLabel(`Play`).setCustomId(`play`).setEmoji(`1145228356892246028`).setStyle('SECONDARY').setDisabled(false)
        const b2 = new MessageButton().setLabel(`Stop`).setCustomId(`stop`).setEmoji(`1145228389901406299`).setStyle('SECONDARY').setDisabled(false)
        const b3 = new MessageButton().setLabel(`Follow`).setEmoji('1145248506144100365')
    .setURL(`https://www.instagram.com/vibes.him/`)
	.setStyle(`LINK`).setDisabled(false)
        const b4 = new MessageButton() .setLabel(`Invite`)
      .setEmoji('1145228339263590412')
   .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    .setStyle(`LINK`).setDisabled(false)


const b5 = new MessageButton().setLabel(`Play`).setCustomId(`play`).setEmoji(`1145228356892246028`).setStyle('SECONDARY').setDisabled(true)
        const b6 = new MessageButton().setLabel(`Stop`).setCustomId(`stop`).setEmoji(`1145228389901406299`).setStyle('SECONDARY').setDisabled(true)

    const drow = new MessageActionRow().addComponents(b5, b6, b3, b4);

    const row = new MessageActionRow().addComponents(b1, b2, b3, b4);

  let m =  await interaction.followUp({ embeds: [embed], components: [row] })


 const filter = i => {
        if (i.user.id === interaction.user.id) return true;
        else {
          i.reply({
            ephemeral: true,
            content: `Only **${interaction.user.tag}** can use this button, if you want then you've to run the command again.`,
          });
          return false;
        }
      }

 const collector = m.createMessageComponentCollector({ filter, componentType: 'BUTTON', time: 30000 });
    
  const played = new MessageEmbed()
                    .setColor("#ffa0a0")
                    .setDescription(`
<:notes:1145228360897802240> Successfully joined and bound to ${interaction.member.voice.channel}.
<:blank:1145228295592489032><:dvd:1145228306166317138> **You can enable 24/7 mode by following here.**`)
    
    collector.on('end', async () => {
      if (!m) return;
      m.edit({ embeds: [embed], components: [drow] })
    });

    collector.on('collect', async i => {
      if (!i.deferred) await i.deferUpdate();

      if (i.customId === `play`) {
  if (interaction.guild.members.me.voice.channel) {
          if (interaction.guild.members.me.voice.channelId !== interaction.member.voice.channelId) {
            return await i
              .followUp({ embeds: [{
      color: '#ffa0a0',
      description: `<:loud:1145228347949981757> You have to be in same voice channel to use this command.`
    }], ephemeral: true})
              .catch(() => { });
          }
        } else if (!i.member.voice.channel) {
        return await i
          .followUp({ embeds: [{
      color: '#ffa0a0',
      description: `<:loud:1145228347949981757> You have to be connected to a voice channel to use this command.`
    }], ephemeral: true})
          .catch(() => { });
      } else {

const player = await client.manager.createPlayer({
      guildId: interaction.guildId,
      voiceId: interaction.member.voice.channelId,
      textId: interaction.channelId,
      deaf: true,
    });
const db = require('../../schema/station.js');
   



   
     const ress = await db.findOne({ Guild: interaction.guildId });

  let  station;
if(!ress) {
  station = "default"
}
      
    if (ress && ress.Radio) station = ress.Radio;
let np;

if(station == "default")
{
  const anim = require('../../songs/default.json');
  np = anim.words[Math.floor((Math.random() * anim.words.length))];
}
    
if(station == "Anime lo-fi")
{
  const anime = require('../../songs/anime.json');
  np = anime.words[Math.floor((Math.random() * anime.words.length))];
}

    if(station == "Sleep lo-fi")
{
  const sleep = require('../../songs/sleep.json');
  np = sleep.words[Math.floor((Math.random() * sleep.words.length))];
}

    if(station == "Study lo-fi")
{
  const study = require('../../songs/study.json');
 np = study.words[Math.floor((Math.random() * study.words.length))];
}

if(station == "Ashy's lo-fi")
{
  const ashy = require('../../songs/ashy.json');
 np = ashy.words[Math.floor((Math.random() * ashy.words.length))];
}

    let query = np;

 

    const result = await player.search(query, { requester: interaction.user });

    if (!result.tracks.length) return interaction.editReply({ content: 'No result was found' });
    const tracks = result.tracks;
 const bb = new MessageButton().setLabel(`Follow ${client.user.username}`).setEmoji('1145248506144100365')
    .setURL(`https://www.instagram.com/vibes.him/`)
	.setStyle(`LINK`).setDisabled(false)
                
                      if (result.type === "PLAYLIST") for (let track of result.tracks) player.queue.add(track);
    else player.queue.add(result.tracks[0]);
if (!player.playing && !player.paused) player.play();
                const roww = new MessageActionRow().addComponents(bb);
         await i.followUp({ embeds: [played], components: [roww]});
              }
        }


      if (i.customId === `stop`) {
          
const player = client.manager.players.get(i.guild.id);
      if (interaction.guild.members.me.voice.channel) {
          if (interaction.guild.members.me.voice.channelId !== interaction.member.voice.channelId) {
            return await i
              .followUp({ embeds: [{
      color: '#ffa0a0',
      description: `👋`
    }], ephemeral: true})
              .catch(() => { });
          }
        }  
        if (!i.member.voice.channel) {
        return await i
          .followUp({ embeds: [{
      color: '#ffa0a0',
      description: `👋`
    }], ephemeral: true})
          .catch(() => { });
      }
        
if(player.queue.current) {
await player.destroy(interaction.guild.id);

await i.followUp({ embeds: [{
      color: '#ffa0a0',
      description: `<:stop:1145228389901406299> Successfully disconnected from ${i.member.voice.channel}
 `
    }]})
} if(player.queue.current == "undefined") {
   return await i
          .followUp({ embeds: [{
      color: '#ffa0a0',
      description: `👋`
    }], ephemeral: true})
}
      
        
      }

      

    });
  },
};
