module.exports = (req, res, next) => {
  const { user } = req.session
  // console.log(req.cookies['connect.sid'])
  console.log(req.session)
  next()
}