let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `📲 𝙋𝙖𝙧𝙖 𝙖𝙙𝙦𝙪𝙞𝙧𝙞𝙧 𝙚𝙡 𝙗𝙤𝙩 𝙘𝙤𝙣: ${pesan}`
  let teks = `𝙑𝙭-𝘽𝙤𝙩 𝙏𝙀 𝙄𝙉𝙑𝙊𝘾𝘼  👋🏻
   ${oi}\n\n💌 *𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝙂𝙀𝙉𝙀𝙍𝘼𝙇:*\n`
  for (let mem of participants) {
  teks += `💌• @${mem.id.split('@')[0]}\n`}
  teks += `𝙑𝙭-𝘽𝙤𝙩`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler