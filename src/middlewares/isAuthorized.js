module.exports = (req, res, next) => {
  const { user } = req.session
  console.log(req.headers)
  next()
}