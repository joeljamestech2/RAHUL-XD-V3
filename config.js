const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2VVSSToI#XbauT9Vb0dl9827ui3fFqUYELdMiLvVA0kdQza6b5yI", //Put your session code here
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/h2qai0.jpg",ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/h2qai0.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am Rahul-xd-v3 Alive Now☑️🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "919356730236",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

