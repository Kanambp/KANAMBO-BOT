
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'What are you looking for?'
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Not found'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await (isVideo ? ytv : yta)(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\ntried another server...'}`)
    }
  }
  if (yt === false) throw 'All servers cannot :/'
  let { dl_link, thumb, title, filesize, filesizeF } = yt'

*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
 ${isLimit ? 'Used ': ''}
`.trim(), m)
let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
`.trim(), m, false,  {
  ..._thumb,
  asDocument: chat.useDocument
})
	
}
handler.help = ['play'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0
handler.diamond = false

export default handler
