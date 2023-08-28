require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', 
  prefix: process.env.PREFIX || '.', 
  ownerID: process.env.OWNERID?.split(',') || ['459620783703195648'], 
  SpotifyID: process.env.SPOTIFYID || '', 
  SpotifySecret: process.env.SPOTIFYSECRET || '', 
  mongourl: process.env.MONGO_URI || '', 
  embedColor: process.env.COlOR || '#ffa0a0', // 
  logs: process.env.LOGS || '', 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/islacafe',
    invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1145226299221213184&permissions=8&scope=applications.commands%20bot',
    vote: process.env.VOTE || 'https://discord.com/users/459620783703195648',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || '185.223.28.2:25710',
      name: process.env.NODE_NAME || 'SiMi',
      auth: process.env.NODE_AUTH || 'Si<3Falak',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
