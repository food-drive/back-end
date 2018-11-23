const getUser = require('../queries/getUser')

module.exports = (req, res) => {
  const { username, password } = req.body
  getUser({
    username,
    password
  })
  .then(() => res.sendStatus(200))
  .catch(error => res.status(500).send(error))
}