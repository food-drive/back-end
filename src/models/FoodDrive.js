const connection = require('../connection')
const Sequelize = require('sequelize')

module.exports =
  connection.define('foodDrive', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      field: 'nome',
      type: Sequelize.STRING,
    },
    year: {
      field: 'anno',
      type: Sequelize.INTEGER,
    },
    active: {
      field: 'attiva',
      type: Sequelize.INTEGER,
    },
  }, {
    tableName: 'colletta',
    createdAt: false,
    updatedAt: false
  })
