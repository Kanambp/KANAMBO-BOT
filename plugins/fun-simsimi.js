import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `Hii *${name}* want to talk? \nrespond *${usedPrefix + command}* (your message) \n\n📌 Exemplo : *${usedPrefix + command}* Hii bot`
  m.react('🗣️') 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "es" }, ''))
  let res = await fetch(`http://sandbox.api.simsimi.com/request.p?key=pjBhPauIVI~TiR1faRPnRU1BqY-M0XV.A5mUBy0q&lc=en&ft=1.0&text=hi`)
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('simsimi', 'Guru').replace('Simsimi', 'Guru').replace('sim simi', 'Guru'))
  else throw json
}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'alexa'] 

export default handler
