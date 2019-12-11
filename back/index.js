const express = require('express')
const models = require('./models')

const app = express()

app.get('/',(req, res) => res.send('hello'))

models
.sequelize
.sync()
.then(()=>app.listen(4000, ()=>console.log('server is listenning')))