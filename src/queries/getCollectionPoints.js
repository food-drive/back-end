const CollectionPoint = require('../models/CollectionPoint')

const query = () => CollectionPoint.findOne({
  where: {
    id_colletta: 8
  }
})

module.exports = query
