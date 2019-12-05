const express = require('express')
const models = require('./models')

const app = express()

app.get('/',(req,res)=>
models
.users
.findAll()
.then(x=>res.json(x))
)

models
.sequelize
.sync()
.then(()=>app.listen(4000, ()=>console.log('server is listenning')))