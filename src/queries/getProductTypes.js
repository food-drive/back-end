const ProductType = require('../models/ProductType')

const query = ({ idColletta }) =>
  ProductType.findAll({
    where: {
      id_colletta: idColletta
    }
  })

module.exports = query