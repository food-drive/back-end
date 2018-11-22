const Sequelize = require('sequelize')

const connect = ({
  database,
  username,
  password,
  host,
}) => new Sequelize(database, username, password, {
  dialect: 'mysql',
  port: 3306,
  host,
  database
})

module.exports = connect
