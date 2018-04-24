const generateRoles = function (gameInfo) {
  return gameInfo.roles ? randomizeRoles(gameInfo.roles) : randomizeRoles(presetRoles[gameInfo.players])
}

const randomizeRoles = function (inputRoles) {
  let roles = inputRoles.slice(0, inputRoles.length)
  let randomizedRoles = []
  let randomIndex
  while (roles.length) {
    randomIndex = Math.floor(Math.random() * roles.length)
    randomizedRoles.push(roles[randomIndex])
    roles.splice(randomIndex, 1)
  }
  return randomizedRoles
}

const presetRoles = {
  '10': [
    'Merlon',
    'Percival',
    'Servant',
    'Servant',
    'Servant',
    'Servant',
    'Mordred',
    'Morgana',
    'Assassin',
    'Oberon'
  ],
  '9': [
    'Merlon',
    'Percival',
    'Servant',
    'Servant',
    'Servant',
    'Servant',
    'Mordred',
    'Morgana',
    'Assassin'
  ],
  '8': [
    'Merlon',
    'Percival',
    'Servant',
    'Servant',
    'Servant',
    'Mordred',
    'Morgana',
    'Assassin'
  ],
  '7': [
    'Merlon',
    'Percival',
    'Servant',
    'Servant',
    'Mordred',
    'Morgana',
    'Assassin'
  ],
  '6': [
    'Servant',
    'Servant',
    'Servant',
    'Servant',
    'Minion',
    'Minion'
  ],
  '5': [
    'Servant',
    'Servant',
    'Servant',
    'Minion',
    'Minion'
  ]
}

module.exports = generateRoles
