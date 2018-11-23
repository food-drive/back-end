const getCollectionPoints = require('../queries/getCollectionPoints')

module.exports = (req, res) =>
  getCollectionPoints()
    .then(results => res.send(results))
    .catch(error => {
      console.log(error)
      res.status(500).send({error: error.message})
    })