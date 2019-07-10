const getReport = require('../queries/getReport')

module.exports = (req, res) => {
  const { query: { idArea, ...query } } = req;
  if (req.session.user.privileges >= 1) {
    query.idArea = idArea;
  }
  return getReport(query)
    .then(results => res.send(results))
    .catch(error => {
      res.status(500).send({error: error.message})
    })
}
