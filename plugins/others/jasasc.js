let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `*Pinjam Dulu Sejuta🗿*`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler
