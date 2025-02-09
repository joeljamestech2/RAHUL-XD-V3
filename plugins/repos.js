const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "respiratory",
    alias: ["srepo","bot","infobot"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`┏❒ʙᴏᴛ sᴄʀɪᴘᴛ
┃ɴᴀᴍᴇ:ᴊᴏᴇʟ xᴍᴅ
┃ᴏᴡɴᴇʀ:ᴊᴏᴇʟᴊᴀᴍᴇsᴛᴇᴄʜ
┃ʀᴇᴘᴏ sᴛᴀᴛᴜs:ᴍᴀɴᴛᴀɪɴᴇᴅ
┃ᴄᴏɴᴛʀɪʙᴜᴛᴏʀs:ᴛᴡᴏ{2}
┗❑
┏❒sᴄʀɪᴘᴛ
┃github.com/joeljamestech2/joel-xmd
┗❑
┏❐sᴜᴘᴘᴏʀᴛ
┃https://joeljamestech.netlify.app/
┗❑`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036329902932🐱322@newsletter',
      newsletterName: "ʟᴏʀᴅ ᴊᴏᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ʟᴏʀᴅ ᴊᴏᴇʟ',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/joeljamestech2/JOEL-XMD" ,
thumbnailUrl: "https://files.catbox.moe/5a2euh.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
