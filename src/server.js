require('dotenv').config()
const express = require('express')
const session = require('cookie-session')
const bodyParser = require('body-parser')
const bearerToken = require('express-bearer-token')

const getCollectionPoints = require('./actions/getCollectionPoints')
const login = require('./actions/login')
const logout = require('./actions/logout')

const isAuthorized = require('./middlewares/isAuthorized')

const app = express()

const expiryDate = new Date((Date.now() + 60 * 60 * 1000) * 2)

app
  .use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
      secure: true,
      httpOnly: true,
      expires: expiryDate
    }
  }))
  .use(bearerToken())
  .use(bodyParser.json())
  .get('/health', (req, res) => {
    res.sendStatus(200)
  })
  .post('/login', login)
  .get('/logout', logout)
  .get('/collectionPoints', isAuthorized, getCollectionPoints)

module.exports = app
