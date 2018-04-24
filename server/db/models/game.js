const Sequelize = require('sequelize')
const db = require('../_db')

const Game = db.define('game', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  users: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  roles: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  lady: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  setup: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Game
