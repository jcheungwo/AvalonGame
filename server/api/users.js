const router = require('express').Router()
const { Game, User } = require('../db/models')

router.put('/updateGameId', (req, res, next) => {
  let users = req.body.users
  let gameId = req.body.gameId
  users.map((user) => {
    User.update({gameId: gameId}, {where: {id: user.id}})
  })
  res.json()
})

module.exports = router
