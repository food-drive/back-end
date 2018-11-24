const connection = require('../connection')
const Sequelize = require('sequelize')

const ProductType =
  connection.define('productType', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_colletta: Sequelize.INTEGER,
    nome: Sequelize.STRING,
    ordine: Sequelize.INTEGER
  }, {
    tableName: 'prodotti_tipi',
    createdAt: false,
    updatedAt: false
  })

module.exports = ProductType