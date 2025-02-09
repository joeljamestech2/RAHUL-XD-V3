
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "owner",
    react: "👦",
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
*https://joeljamestech.netlify.app*

❒ᴡᴀ ᴄʜᴀɴɴᴇʟ❑
*https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K*

❐ʏᴏᴜ-ᴛᴜʙᴇ❏
*https://youtube.com/@joeljamestech255*

❐ᴛɪᴋ ᴛᴏᴋ❏
*https://tiktom.com/@joeljamestech*

❏ɢɪᴛ ʜᴜʙ❐
*github.com/joeljamestech2*

❏ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀs❐
ʟᴏʀᴅ ᴊᴏᴇʟ 
wa.me 255714595078
wa.me 255767570963
wa.me 255781144539
αм 17 уєяαѕ σℓ∂ αм ωα¢нιηg 
αηιмє тσ ƒєєℓ вєттєя
⁠⁠⁠❏━━━━━━━━━━━━━━━━━━━❐
*ᴋᴇᴇᴘ ᴜsɪɴɢ ᴊᴏᴇʟ ᴍᴅ ʙᴏᴛ*`

await conn.sendMessage(from,{image:{url:config.OWNER_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`ᴛʜᴏsᴇ ᴀʀᴇ ᴍʏ ᴏᴡɴᴇʀ ɪɴғᴏ`)
}
})
