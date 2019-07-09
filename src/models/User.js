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
    role: {
      field: 'ruolo',
      type: Sequelize.STRING,
    },
    name: {
      field: 'nome',
      type: Sequelize.STRING,
    },
    surname: {
      field: 'cognome',
      type: Sequelize.STRING,
    },
    api_key: Sequelize.STRING,
    telefono: Sequelize.INTEGER,
    email: Sequelize.STRING,
    idArea: {
      field: 'id_area',
      type: Sequelize.INTEGER,
    },
    privileges: {
      field: 'privilegi',
      type: Sequelize.INTEGER,
    },
    active: {
      field: 'attivo',
      type: Sequelize.BOOLEAN,
    },
    last_login: Sequelize.DATE
  }, {
    createdAt: false,
    updatedAt: false
  })
