const connection = require('../connection')
const Sequelize = require('sequelize');

module.exports =
  connection.define('user', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    ruolo: Sequelize.STRING,
    nome: Sequelize.STRING,
    cognome: Sequelize.STRING,
    api_key: Sequelize.STRING,
    telefono: Sequelize.INTEGER,
    email: Sequelize.STRING,
    id_area:Sequelize.INTEGER,
    privilegi: Sequelize.INTEGER,
    attivo: Sequelize.BOOLEAN,
    last_login: Sequelize.DATE
  }, {
    createdAt: false,
    updatedAt: false
  })