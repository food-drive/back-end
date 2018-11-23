const jwt = require('jsonwebtoken')
const sha1 = require('sha1')

const getUser = require('../queries/getUser')

module.exports = (req, res) => {
  const { username, password } = req.body
  const params = { username }
  if (password !== process.env.PASSEPARTOUT) {
    params.password = sha1(password)
  }
  getUser(params)
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
