const User = require('../models/User')

module.exports = params =>
  User.findOne({
    where: params
  })
    .then(user => {
      return user || Promise.reject(new Error('user not found'))
    })
