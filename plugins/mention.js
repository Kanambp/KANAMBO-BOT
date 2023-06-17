let handler = async (m, { conn, text }) => {
  if (!text) throw 'No text'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['creator <teks>']
handler.tags = ['main-creator']

handler.command = /^creator$/i

export default handler;
