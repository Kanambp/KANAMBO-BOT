
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        let api = await fetch(`http://sandbox.api.simsimi.com/request.p?key=pjBhPauIVI~TiR1faRPnRU1BqY-M0XV.A5mUBy0q&lc=en&ft=1.0&text=hi`)
        let res = await api.json()
        m.reply(res.success.replace('simsimi', 'KANAMBO').replace('Simsimi', 'KANAMBO').replace('sim simi', 'KANAMBO'))
    
}
