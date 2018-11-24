const getProductTypes = require('../queries/getProductTypes')

module.exports = (req, res) =>
  getProductTypes(req.query)
    .then(results => res.send(results))
    .catch(error => {
      console.log(error)
      res.status(500).send({error: error.message})
    })