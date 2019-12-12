const express = require('express')
const models = require('./models')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))// pour les params

//les root sont dans le dossier back/root/admin ou user


require('./routes/freelancer.js')(app)
require('./routes/user.js')(app)

models
    .sequelize
    .sync({force : false})
    .then(() => app.listen(5000, () => console.log('server is listenning')))