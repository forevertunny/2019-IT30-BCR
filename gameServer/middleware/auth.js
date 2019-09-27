const jwt = require('jsonwebtoken')
require('dotenv').config()
const dbBet = require('../lib/dbBet')
const dbUser = require('../lib/dbUser')
const dbTable = require('../lib/dbTable')

var auth = function (socket, next) {
  console.log(socket.handshake.query.token)
  console.log('===========================KE')
  console.log(process.env.SECRET_KEY)
  console.log('==============================')
  jwt.verify(socket.handshake.query.token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log(err)
      socket.disconnect()
    } else {
      socket._id = decoded.userInfo.id
      next()
    }
  })
}
module.exports = auth
