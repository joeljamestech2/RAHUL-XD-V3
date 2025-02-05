const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "get bot repo",
    category: "main",
    react: "✨",
    filename: __filename
>
let dec = `*👋 Hello ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦ https://github.com/rahulmaster143/RAHUL-XD-V3

⭐ 𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

®️◦ https://www.youtube.com/@rahulhiran4733 

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ THE RAHUL-MASTER*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/ug2x1y.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
