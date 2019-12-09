const express = require('express')
const models = require('./models')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

//les root sont dans le dossier back/root/admin ou user


require('./routes/freelancer.js')(app)
//require('./routes/admin.js')(app)





models
    .sequelize
    .sync({force : true})
    .then(() => app.listen(5000, () => console.log('server is listenning')))