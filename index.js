require('dotenv').config()

const bcrypt = require('bcryptjs')
const express = require('express')
const path = require('path')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

const mongoDB = process.env.MONGO_URI
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'mongo connection error'))

const app = express()
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res, next) => res.send('Hello world!'))

app.listen(process.env.PORT, () => console.log('server listening on port ' + process.env.PORT))
