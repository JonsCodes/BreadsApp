const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
// CONFIGURATION
require('dotenv').config()

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Bread App!')
})

//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controllers.js')
app.use('/bakers', bakersController)

const PORT = process.env.PORT || 3003
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to : ', process.env.MONGO_URI)}
    )

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, () => {
    // console.log('listening on port:', PORT)
})

