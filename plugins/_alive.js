import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[KANAMBO-BOT]───╮
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I'm KANAMBO-BOT\n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│ KANAMBO-BOT
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 PETER KANAMBO KE
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/254114148625
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .list \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing KANAMBO-BOT! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
