const express = require('express')
const path = require('path')
const morgan = require('morgan')
const upload = require('./config/multer.config')
const { format } = require('timeago.js')
const app = express()

//Settings 
app.set('port', process.env.PORT || 7777)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))

//Midlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(upload)

//Global Variables
app.use((req, res, next) => {
    res.locals.format = format
    next()
})

//Routes
app.use(require('./routes/image.routes'))

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app