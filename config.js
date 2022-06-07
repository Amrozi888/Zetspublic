const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'GuaAbuzz17',
}

// Other
global.owner = ['6287773973818']
global.premium = ['6285828764046']
global.ownername = 'rozi'
global.botname = '⳹ ❋ཻུ۪۪Zifabotz-MD⳹ ❋ཻུ۪۪'
global.packname = '© ⳹ ❋ཻུ۪۪Zifabotz-MD⳹ ❋ཻུ۪۪'
global.gc = 'https://chat.whatsapp.com/I8Q4oJVw8buHhIgMH5iVAv'
global.limitawal = '100'
global.author = 'zifabotz'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: '*DONE NGAB..*',
    admin: '*emng lu admin mau gunain fiturnye?*',
    botAdmin: '*Bot dah masuk tapi gak admin lawak Lo min',
    owner: '_*kau bukan owner gw tolol_',
    group: '_*Mikir dikit anjing,ini bukan grub*_',
    private: '*Chat pribadi!!*',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*Wait Tod Lagi Proses!!*',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/pepe.jpg')
global.thumb = fs.readFileSync('./media/pepe.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
