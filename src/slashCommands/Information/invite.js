const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
  name: "invite",
  description: "Invite Lofi Radio to your own Server",
  userPrams: [],
  botPrams: ['EMBED_LINKS'],

  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false
    });

    var invite = client.config.links.invite;
    var color = client.embedColor
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel("Invite")
          .setStyle("LINK")
        .setEmoji("1145228339263590412")
          .setURL(invite)
      );

    const mainPage = new MessageEmbed()
      .setAuthor({ name: `${client.user.username}'s' invite`, iconURL: client.user.displayAvatarURL(), url: `https://discord.com/api/oauth2/authorize?client_id=1145226299221213184&permissions=8&scope=applications.commands%20bot` })
      .setDescription(`<:invite:1145228339263590412> **Click [Here](${invite}) To Invite Me **`)
      .setColor(color)
    interaction.editReply({ embeds: [mainPage], components: [row] })
  }
}