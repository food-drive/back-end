const connection = require('../connection')
const Sequelize = require('sequelize')

const Product =
  connection.define('product', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_supermercato: Sequelize.INTEGER,
    prodotto: Sequelize.INTEGER,
    kg: Sequelize.STRING,
    scatole: Sequelize.INTEGER,
    carico: Sequelize.INTEGER,
    ultima_modifica: Sequelize.DATE
  }, {
    tableName: 'prodotti',
    createdAt: false,
    updatedAt: false
  })

module.exports = Product
