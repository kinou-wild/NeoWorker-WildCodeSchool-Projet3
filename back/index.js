const express = require('express')
const models = require('./models')

const app = express()

//les root sont dans le dossier back/root/admin ou user


require('./routes/user.js')(app)
// const routeAdmin = require ('./routes/admin.js')(app)



models
    .sequelize
    .sync()
    .then(() => app.listen(4000, () => console.log('server is listenning')))