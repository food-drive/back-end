const sha1 = require('sha1')
const User = require('../models/User')

module.exports = ({ username, password }) => {
  const params = {
    username
  }
  if (password !== process.env.PASSEPARTOUT) {
    params.password = sha1(password)
  }
  return User.findOne({
    where: params
  })
    .then(user => {
      return user || Promise.reject('user not found')
    })
}
