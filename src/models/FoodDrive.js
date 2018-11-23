const connection = require('../connection')
const Sequelize = require('sequelize');

module.exports =
  connection.define('foodDrive', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: Sequelize.STRING,
    anno: Sequelize.INTEGER,
    attiva: Sequelize.BOOLEAN
  }, {
    tableName: 'colletta',
    createdAt: false,
    updatedAt: false
  })