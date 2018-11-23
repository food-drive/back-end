require('dotenv').config()
const express = require('express');
const path = require('path');
const session = require('express-session')
const bodyParser = require('body-parser')

const getCollectionPoints = require('./actions/getCollectionPoints')
const login = require('./actions/login')

const app = express()

app
// .use(session)
.use(bodyParser.json())
.get('/health', (req, res) => {
  res.sendStatus(200);
})
.post('/login', login)
.get('/collectionPoints', getCollectionPoints)

module.exports = app
