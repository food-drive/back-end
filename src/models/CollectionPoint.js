const connection = require('../connection')
const Sequelize = require('sequelize')
const FoodDrive = require('./FoodDrive')
const Chain = require('./Chain')
const City = require('./City')
const Product = require('./Product')

const CollectionPoint =
  connection.define('collectionPoint', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_supermercato: Sequelize.INTEGER,
    id_catena: Sequelize.INTEGER,
    indirizzo: Sequelize.STRING,
    id_comune: Sequelize.INTEGER,
    name: {
      field: 'nome',
      type: Sequelize.STRING,
    },
    id_area: Sequelize.INTEGER
  }, {
    tableName: 'supermercati',
    createdAt: false,
    updatedAt: false
  })

CollectionPoint.belongsTo(FoodDrive, { foreignKey: 'id_colletta' })
CollectionPoint.belongsTo(Chain, { foreignKey: 'id_catena' })
Chain.hasMany(CollectionPoint, { foreignKey: 'id_catena' })
CollectionPoint.belongsTo(City, { foreignKey: 'id_comune' })
City.hasMany(CollectionPoint, { foreignKey: 'id_comune' })
CollectionPoint.hasMany(Product, { foreignKey: 'id_supermercato' })

module.exports = CollectionPoint
