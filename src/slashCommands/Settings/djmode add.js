const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const db = require("../../schema/dj");

module.exports = {
    name: "djmode-add",
    description: "Setup Dj role.",
    userPrams: ['ADMINISTRATOR'],
    botPrams: ['MANAGE_GUILD'],
    options: [
        {
            name: "role",
            description: "Mention a Role.",
            required: true,
            type: "ROLE"
        }
    ],
    /**
    * @param {Client} client
    * @param {CommandInteraction} interaction
    */

    run: async (client, interaction, prefix) => {

        await interaction.deferReply({
            ephemeral: false
        });

        let data = await db.findOne({ Guild: interaction.guildId });
        const role = interaction.options.getRole('role').id;
        if (!data) {
            data = new db({
                Guild: interaction.guildId,
                Roles: [role.id],
                Mode: true
            })
            await data.save();

const thing = new MessageEmbed()
  .setAuthor({ name: `${client.user.username} - DJRoles`, iconURL: client.user.displayAvatarURL(), url: `https://discord.gg/islacafe` })
  
.setDescription(`<:dj:1145228303880433754> **Successfully added DJ Role in this server** 
<:blank:1145228295592489032><:star:1145228385925222492> **Role:** <@&${role}>.`)
.setColor(client.embedColor);



     const things   =  new MessageEmbed()
       .setAuthor({ name: `${client.user.username} - DJRoles`, iconURL: client.user.displayAvatarURL(), url: `https://discord.gg/islacafe` })
       
.setDescription(`<:dj:1145228303880433754> **Role already exist in this server.** 
<:blank:1145228295592489032><:star:1145228385925222492> **Role:** <@&${role}>.`)
.setColor(client.embedColor);
          
          
            return await interaction.editReply({ embeds: [thing] })
        } else {
          const thing = new MessageEmbed()
  .setAuthor({ name: `${client.user.username} - DJRoles`, iconURL: client.user.displayAvatarURL(), url: `https://discord.gg/islacafe` })
  
.setDescription(`<:dj:1145228303880433754> **Successfully added DJ Role in this server** 
<:blank:1145228295592489032><:star:1145228385925222492> **Role:** <@&${role}>.`)
.setColor(client.embedColor);
            let rolecheck = data.Roles.find((x) => x === role.id);
            if (rolecheck) return interaction.editReply({ embeds: [things] })
            data.Roles.push(role.id);
            await data.save();
            return await interaction.editReply({ embeds: [thing] })

        }
    }
}

