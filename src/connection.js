const Sequelize = require('sequelize')

const connect = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    port: 3306,
    host: process.env.DB_HOST
  }
)

module.exports = connect
