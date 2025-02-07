const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🎉",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `💫 HEY ${pushname} THIS IS MY MENU ®️

🌟👑 RAHUL_XD_V3 - 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂 👑🌟

      👋 HELLO, ${pushname}!

✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 Rahul-Xd-V3! ✨ 

📊 *𝗕𝗼𝘁 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:*
────────────────────
⏳ *𝗥𝘂𝗻𝘁𝗶𝗺𝗲:* ${runtime(process.uptime())}
👤 *𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲:* RAHUL-MASTER
📞 *𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿:* ${config.BOT_NUMBER}
────────────────────

📥 *𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂:*

${menu.download}

────────────────────
🔧 *𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂:*

${menu.main}

────────────────────
🎉 *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂:*

${menu.fun}

────────────────────
👥 *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂:*

${menu.group}

────────────────────
🔒 *𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂:*

${menu.owner}

────────────────────
🔄 *𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂:*

${menu.convert}

────────────────────
🔍 *𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂:*

${menu.search}

────────────────────
⚙️ *𝗢𝘁𝗵𝗲𝗿 𝗠𝗲𝗻𝘂:*

${menu.other}

──────────────────── 

©️I AM RAHUL-XD-V3 WHATSAPP BOT ®️


>**POWERED BY THE MAIN RAHUL-MASTER🇮🇳**`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/d4GxTgKf/temp-image.jpg`},caption:dec},{quoted:mek});
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
