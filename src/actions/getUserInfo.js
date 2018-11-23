module.exports = (req, res) => {
  const { user } = req.session
  res.status(200).send(user)
}
