const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const db1 = require("../../schema/station.js");
const db2 = require('../../schema/mode.js');
module.exports = {
  name: "premium",
  description: "Shows information about Lofi Bot premium",
  userPrams: ['MANAGE_GUILD'],
  botPrams: ['EMBED_LINKS'],
  /**
      * @param {Client} client
      * @param {CommandInteraction} interaction
      */

  run: async (client, interaction, prefix) => {
    await interaction.deferReply({
    });

const ress = await db1.findOne({ Guild: interaction.guildId });
    if (ress && ress.Radio) station = ress.Radio;

const res = await db2.findOne({ Guild: interaction.guildId });
    if (res && res.mode) mode = res.mode;
    
const np = new MessageEmbed()
  .setAuthor({ name: `${client.user.username} Premium`, iconURL: client.user.displayAvatarURL(), url: `https://discord.gg/islacafe` })
                    .setDescription(`
**<:heart:1145228326911365170> Premium perks:
<:blank:1145228295592489032><:notes:1145228360897802240> 24/7 Music Playback.
<:blank:1145228295592489032><:loud:1145228347949981757> Volume controls.
<:blank:1145228295592489032><:radio:1145228373812056074> Multiple radio stations/themes.
<:blank:1145228295592489032><:floppy_disk:1145228318606630932> Create custom radio stations using your playlists.
<:blank:1145228295592489032><:dvd:1145228306166317138> Higher quality audio.
<:blank:1145228295592489032><:dj:1145228303880433754>  Set up server DJ roles.
<:blank:1145228295592489032><:timer:1145228396838785035> Lower commands cooldown.
<:blank:1145228295592489032><:premium:1145228365356343336>  Early access to Lofi Radio's new features.
<:blank:1145228295592489032><:telegram:1145228392485109770>  Priority support.
<:info:1145228335438372914> How to get premium?
<:blank:1145228295592489032><:premium:1145228365356343336>  By following @vibes.him on Instagram <a:pink_insta:1145248506144100365>.**`)


      .setColor(client.embedColor);


interaction.followUp({
  embeds: [np]
})

    
  }
}
