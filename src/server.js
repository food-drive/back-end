require('dotenv').config()
const express = require('express');
const path = require('path');
var session = require('express-session')

const getCollectionPoints = require('./actions/getCollectionPoints')

const app = express()

app
.get('/health', (req, res) => {
  res.sendStatus(200);
})
.get('/collectionPoints', getCollectionPoints)

module.exports = app
