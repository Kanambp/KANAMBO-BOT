import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['923036631033', 'KASHIF', true],
  ['923068872881', 'SILVER FOX', true],
  ['']
] //Number of owners

global.mods = ['923068872881', '923036631033'] 
global.prems = ['923036631033', '923068872881']

// global.ai = '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', // Get you Api-key from 'https://platform.openai.com/account/api-keys'
// global.org = 'org-Wmzg6lcVPHGYXxmvPpM0CDsu',   
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['SGWN']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'SILVER FOX'
global.premium = 'true'
global.packname = 'SILVER┃FOX' 
global.author = '@SILVER FOX' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/\n' 
global.dygp = 'https://chat.whatsapp.com/EcDdyVEFdXjJXzzr2WnMIG'
global.fgsc = 'https://chat.whatsapp.com/EcDdyVEFdXjJXzzr2WnMIG' 
global.fgyt = 'https://youtube.com/'
global.fgpyp = 'https://youtube.com/'
global.fglog = 'https://cdn.jsdelivr.net/gh/Kanambp/kanamb@main/kanambo.jpg' 


global.wait = '*⌛ _please wait..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
