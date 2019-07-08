const connection = require('../connection')
const Sequelize = require('sequelize')

module.exports =
  connection.define('chain', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      field: 'nome',
      type: Sequelize.STRING,
    },
  }, {
    tableName: 'catene',
    createdAt: false,
    updatedAt: false
  })
