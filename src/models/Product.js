const connection = require('../connection')
const Sequelize = require('sequelize')

const Product =
  connection.define('product', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    idCollectionPoint: {
      field: 'id_supermercato',
      type: Sequelize.INTEGER,
    },
    type: {
      field: 'prodotto',
      type: Sequelize.INTEGER,
    },
    kg: Sequelize.STRING,
    boxes: {
      field: 'scatole',
      type: Sequelize.INTEGER,
    },
    load: {
      field: 'carico',
      type: Sequelize.INTEGER,
    },
    ultima_modifica: Sequelize.DATE
  }, {
    tableName: 'prodotti',
    createdAt: false,
    updatedAt: false
  })

module.exports = Product
