const connection = require('../connection')
const Sequelize = require('sequelize')

module.exports =
  connection.define('chain', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: Sequelize.STRING
  }, {
    tableName: 'catene',
    createdAt: false,
    updatedAt: false
  })
