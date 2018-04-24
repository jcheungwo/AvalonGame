const User = require('./user')
const Game = require('./game')

User.belongsTo(Game)

module.exports = {
  User,
  Game
}
