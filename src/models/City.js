const connection = require('../connection')
const Sequelize = require('sequelize')
const Province = require('./Province')

const City =
  connection.define('city', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      field: 'nome',
      type: Sequelize.STRING,
    },
    id_provincia: Sequelize.INTEGER
  }, {
    tableName: 'comuni',
    createdAt: false,
    updatedAt: false
  })

module.exports = City
