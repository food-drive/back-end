const express = require('express');
const path = require('path');

require('dotenv').config()
const connection = require('./connection')
const defineCollectionPoint = require('./models/CollectionPoint')

const sequelize = connection({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

const models = ({
  CollectionPoint: defineCollectionPoint(sequelize)
})

const allCollectionPoints = (req, res) => models.CollectionPoint.findOne({
  where: {
    id_colletta: 8
  }
})
.then(results => res.send(results))
.catch(error => res.status(500).send(error))

const app = express()

app
.get('/health', (req, res) => {
  res.sendStatus(200);
})
.get('/collectionPoints', allCollectionPoints)

module.exports = app
