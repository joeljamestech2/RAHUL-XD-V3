const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "joel",
    react: "🎓",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `*Hi ${pushname}*\n\n *joel Here*\n\n *Creator of*\n\n *joel md & joel xmd*\n\n *Please Follow Me*\n\n\n *https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K*
> *ʟᴏʀᴅ ᴊᴏᴇʟ*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
