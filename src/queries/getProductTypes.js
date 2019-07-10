const ProductType = require('../models/ProductType')

const query = ({ idEvent }) =>
  ProductType.findAll({
    where: {
      idEvent
    }
  })

module.exports = query