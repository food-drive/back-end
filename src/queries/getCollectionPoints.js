const sequelize = require('sequelize');
const CollectionPoint = require('../models/CollectionPoint')
const FoodDrive = require('../models/FoodDrive')
const Chain = require('../models/Chain')
const Product = require('../models/Product')
const City = require('../models/City');
const Province = require('../models/Province');

const query = params => {
  const { idArea, idColletta, ...query } = params
  if (idColletta) {
    return CollectionPoint.findAll({
      where: {
        id_area: idArea,
        id_colletta: idColletta,
        ...query
      },
      group:['collectionPoint.id'],
      include: [{
        model: Product, attributes: []
      },
        {
          model: FoodDrive,
          attributes: ['id'],
        },
        {
          model: Chain,
          attributes: ['name'],
        },
        {
          model: City,
          attributes: ['name'],
          include: {
            model: Province,
            attributes: ['name'],
          }
        },
      ],
      attributes:[
        'id',
        'name',
        ['indirizzo', 'address'],
        [sequelize.fn('sum', sequelize.col('products.kg')), 'kg'],
        [sequelize.fn('sum', sequelize.col('products.scatole')), 'boxes'],
      ],
    })
  } else {
    return Promise.reject(new Error('Not enough parameters'))
  }
}

module.exports = query
