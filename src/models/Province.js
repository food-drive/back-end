const connection = require('../connection')
const Sequelize = require('sequelize')

module.exports =
  connection.define('province', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      field: 'nome',
      type: Sequelize.STRING,
    },
  }, {
    tableName: 'province',
    createdAt: false,
    updatedAt: false
  })
