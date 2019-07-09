const getCollectionPoints = require('../queries/getCollectionPoints')

module.exports = (req, res, test) => getCollectionPoints(req.query)
  .then(results => res.send(results))
  .catch(error => {
    res.status(500).send({error: error.message})
  })
