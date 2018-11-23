module.exports = (req, res) => {
  if (req.session) {
    req.session = null
    return res.sendStatus(200)
  }
}