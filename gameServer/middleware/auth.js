const dbBet = require('../lib/dbBet')
const dbUser = require('../lib/dbUser')
const dbTable = require('../lib/dbTable')

var auth = function (socket, next) {
  // console.log(socket.handshake.query.token)
  //   socket.disconnect()
  socket._id = socket.handshake.query.token
  next()
}
module.exports = auth
