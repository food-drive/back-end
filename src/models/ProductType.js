const connection = require('../connection')
const Sequelize = require('sequelize')

const ProductType =
  connection.define('productType', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    idEvent: {
      field: 'id_colletta',
      type: Sequelize.INTEGER,
    },
    name: {
      field: 'nome',
      type: Sequelize.STRING,
    },
    order: {
      field: 'ordine',
      type: Sequelize.INTEGER,
    }
  }, {
    tableName: 'prodotti_tipi',
    createdAt: false,
    updatedAt: false
  })

module.exports = ProductType