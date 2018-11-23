const getFoodDrives = require('../queries/getFoodDrives')

module.exports = (req, res) =>
  getFoodDrives(req.query)
    .then(results => res.send(results))
    .catch(error => {
      console.log(error)
      res.status(500).send({error: error.message})
    })