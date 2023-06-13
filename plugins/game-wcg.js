import wcg from '../lib/wcg.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
	{
		pattern: 'wcg ?(.*)',
		fromMe: true,
		desc: 'word chain game\nwcg start to force start game',
		type: 'game',
	},
	async (message, match) => {
		if (match == 'start') {
			return await wcg.start(message.jid)
		}
		wcg.start_game(message.jid, message.participant)
	}
)
