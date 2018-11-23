const CollectionPoint = require('../models/CollectionPoint')
const FoodDrive = require('../models/FoodDrive')
const Chain = require('../models/Chain')
const Product = require('../models/Product')

const query = params => {
  const { idArea, idColletta, ...rest } = params
  if (idArea && idColletta) {
    return CollectionPoint.findAll({
      where: {
        id_area: idArea,
        id_colletta: idColletta,
        ...rest
      },
      include: [FoodDrive, Chain, Product]
    })
  } else {
    return Promise.reject(new Error('Not enough parameters'))
  }
}

module.exports = query
