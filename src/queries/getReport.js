const sequelize = require('sequelize');
const CollectionPoint = require('../models/CollectionPoint')
const FoodDrive = require('../models/FoodDrive')
const Chain = require('../models/Chain')
const Product = require('../models/Product')
const City = require('../models/City');
const Province = require('../models/Province');

const query = params => {
  const { idArea, idEvent, ...query } = params
  if (idEvent) {
    return CollectionPoint.findAll({
      where: {
        id_area: idArea,
        idEvent,
        ...query
      },
      include: [
        Product,
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
      ],
    })
  } else {
    return Promise.reject(new Error('Not enough parameters'))
  }
}

module.exports = query
