const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2347032983433"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'isaacnerds@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '2347032983433' 
global.devs = '2347032983433';
global.website = '' 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FXR25kWVZ3amw3NlR2aFlhNHNrZzZWS3EzSjd3NkJlT3kxaVI4dHVsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnczWHlCVjZwM2tENHRib2FwZkM1OUYweGZMSmMram5INCtoN2wzL0t6MD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRVBpZCtiVkNCQWhYZ01hWURHK3NCaEc2QndRMWV5STBxWmh6SVU4YUZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrd0N5bXlzUU5xdFBhMUdXeWt1RzdVVmlBblRVRmlZeWtrZHh2bnlPRFVZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLOExjcFpyVlZDS3RobDErcDlHZ09pRkI1K1FLNHFYVndTRE53L1ZRa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVpdWdtb0xZTHFhSmZXVXpsVXIzU3pZRmhjNGsxajFmakRnTHpFcTVNakk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RWpLUGRVTm0yYlZDN1dFWWEvaHVGdFNxcWJUUWs3V2w3dE1oVy9kOHc1UFQ3KzdHbVAxZ1QyVGpmUE9kbC9xV0tuRDNDOVluSDJsaWh4RC9LL2lCUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzMCwiYWR2U2VjcmV0S2V5IjoiU1FJVUNIUTZEMEZBMVBhMTI0eDJlYUJhaTJINjlJckNOcUMxcUI0SDg0Yz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV2p3cmlvaTJUcjZkRW1qQ1JlTTNRdyIsInBob25lSWQiOiIxZWRjMTYyMy1hMmNkLTQzOGItYmEyYy1lZDgxZWRlMmEyNTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmdWK2J1d21LRDlhY2JYbHNXQVNtUE85VHpRPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwU3lzQUJZRWVTd2p4WSsyZnpFVzJlRSsrcm89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZTlxdEFHRU5TMXpya0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjcngveVhNYXd1eUpRbDF3V1pQYzJMQWt6V3l5S3lIVUFibkdkSjJRZVR3PSIsImFjY291bnRTaWduYXR1cmUiOiJGa0ZtYlVDZzVOWkZ2TnFRdWp1S3FBVUcvN3Brem5PcjFtV0JzeFk2c2FRSE9zTTlxeTBYK2RjbytoaEdmM0x4K2N2MlpMNXVxbnl0MVRYZ0Q2VmpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUEhYZm8wR0ZsNitQcTlwL2JDaVRybjhPdGNXM2U3S1I0WW9XTllCS0Fvei84K0pLSFZoa0d5MVVjZ21ORjkzWWxtbWlBMlpjemM5VkRaV1B5ZDFBQ2c9PSJ9LCJtZSI6eyJpZCI6IjIzNDcwMzI5ODM0MzM6NjJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAzMjk4MzQzMzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYSzhmOGx6R3NMc2lVSmRjRm1UM05pd0pNMXNzaXNoMUFHNXhuU2RrSGs4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNDM1MjI0fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Tifebot',
  packname:  process.env.PACK_NAME || 'Tifebot',
   
  botname:   process.env.BOT_NAME === undefined ? "Tife-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Tife' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? '' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '91' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
