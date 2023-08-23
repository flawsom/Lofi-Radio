require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', 
  prefix: process.env.PREFIX || '.', 
  ownerID: process.env.OWNERID?.split(',') || ['1021662086201352192'], 
  SpotifyID: process.env.SPOTIFYID || 'f8b0b42c1b8c43cc9facef57a6fbeecd', 
  SpotifySecret: process.env.SPOTIFYSECRET || '60c6344ca5924ccb8e942ddb2b51da86', 
  mongourl: process.env.MONGO_URI || '', 
  embedColor: process.env.COlOR || '#DDBD86', // 
  logs: process.env.LOGS || '', 
  links: {
    support: process.env.SUPPORT || 'https://discord.com/channels/1139691561282703430/1140140086055403593',
    invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1143787347331252224&permissions=8&scope=applications.commands%20bot',
    vote: process.env.VOTE || 'https://discord.com/users/1021662086201352192',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || '54.38.198.24:88',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'stonemusicgay',
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
