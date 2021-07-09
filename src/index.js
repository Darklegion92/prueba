const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload')
const app = express()
require('./database')

//Config
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'components'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//Middlewares
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(fileUpload())
//Variables

//Routes
app.use(require('./routes/Form.routes'))
app.use(require('./routes/User.routes'))
//Statics
app.use(express.static(path.join(__dirname, 'public')))
//Server liste
app.listen(app.get('port'), () => {
    console.log('Corriendo en puerto ', app.get('port'));
})
