const connection = require('../connection')
const Sequelize = require('sequelize');

module.exports =
  connection.define('collectionPoint', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_supermercato: Sequelize.INTEGER,
    id_colletta: Sequelize.INTEGER,
    id_catena: Sequelize.INTEGER,
    indirizzo: Sequelize.STRING,
    id_comune: Sequelize.INTEGER,
    id_provincia: Sequelize.INTEGER,
    id_diocesi: Sequelize.INTEGER,
    nome:Sequelize.STRING,
    id_magazzino: Sequelize.INTEGER,
    id_area: Sequelize.INTEGER,
  }, {
    tableName: 'supermercati',
    createdAt: false,
    updatedAt: false
  })