const jwt = require('jsonwebtoken')

const notAuthorizedError = {error: 'Not authorised'}

module.exports = (req, res, next) => {
  const { user } = req.session
  if (!user) res.status(500).send(notAuthorizedError)
  else {
    try {
      const isAuthorized = jwt.verify(req.token, process.env.JWT_SECRET)
      if (isAuthorized) next()
      else res.status(500).send(notAuthorizedError)
    } catch (error) {
      res.status(500).send({error})
    }
  }
}
