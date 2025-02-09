
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "support",
    react: "🙂",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `❏━━━━━━━━━━━━━━━━━━━❐
❒⁠ᴊᴏᴇʟ ᴍᴅ sᴜᴘᴘᴏʀᴛ❑
https://joeljamestech.netlify.app

❒ᴡᴀ ᴄʜᴀɴɴᴇʟ❑
*https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K*

❐ʏᴏᴜ-ᴛᴜʙᴇ❏
*https://youtube.com/@joeljamestech255*

❐ᴛɪᴋ ᴛᴏᴋ❏
*https://tiktom.com/@joeljamestech*

❏ɢɪᴛ ʜᴜʙ❐
*github.com/joeljamestech2*

⁠⁠⁠❏━━━━━━━━━━━━━━━━━━━❐
*ᴋᴇᴇᴘ ᴜsɪɴɢ ᴊᴏᴇʟ ᴍᴅ ʙᴏᴛ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`ғᴏʟʟᴏᴡ ᴍᴇ ᴘʟᴇᴀsᴇ 😞`)
}
})
