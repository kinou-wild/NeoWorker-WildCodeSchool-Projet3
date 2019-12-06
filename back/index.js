const express = require('express')
const models = require('./models')

const app = express()

//les root dans le dossier back/root/admin ou user

models
    .sequelize
    .sync()
    .then(() => app.listen(4000, () => console.log('server is listenning')))