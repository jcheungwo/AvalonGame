module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`socket connected to ${socket.id}`)
  })
}
