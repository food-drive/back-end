require('dotenv').config()
const express = require('express')
const session = require('cookie-session')
const bodyParser = require('body-parser')
const bearerToken = require('express-bearer-token')

const getCollectionPoints = require('./actions/getCollectionPoints')
const getFoodDrives = require('./actions/getFoodDrives')
const login = require('./actions/login')
const logout = require('./actions/logout')
const getUserInfo = require('./actions/getUserInfo')

const isAuthorized = require('./middlewares/isAuthorized')

const app = express()

const expiryDate = new Date((Date.now() + 60 * 60 * 1000) * 2)

app
  .set('trust proxy', true)
  .use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
      expires: expiryDate
    }
  }))
  .use(bearerToken())
  .use(bodyParser.json())
  .get(`${process.env.API_PATH}/health`, (req, res) => {
    res.sendStatus(200)
  })
  .post(`${process.env.API_PATH}/login`, login)
  .get(`${process.env.API_PATH}/logout`, logout)
  .get(`${process.env.API_PATH}/userInfo`, isAuthorized, getUserInfo)
  .get(`${process.env.API_PATH}/collectionPoints`, getCollectionPoints)
  .get(`${process.env.API_PATH}/foodDrives`, isAuthorized, getFoodDrives)

module.exports = app
