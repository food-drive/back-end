const jwt = require('jsonwebtoken')

const getUser = require('../queries/getUser')

module.exports = (req, res) => {
  const { username, password } = req.body
  getUser({
    username,
    password
  })
    .then(user => {
      const { id, username, ruolo, nome, cognome, email, id_area, privilegi, attivo } = user
      req.session.user = { id, username, ruolo, nome, cognome, email, id_area, privilegi, attivo }
      const token = jwt.sign(
        req.session.user,
        process.env.JWT_SECRET,
        { expiresIn: (60 * 60) * 4 }
      )
      res.status(200).send({token})
    })
    .catch(error => {
      res.status(500).send({
        error: error.message
      })
    })
}
