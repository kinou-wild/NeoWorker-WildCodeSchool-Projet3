const models = require ('../models')

module.exports = app => {

    app.get('/users',(req,res)=>{
        models
        .users
        .findAll()
        .then(x=>{res.json(x)})
    })

     app.post('/users',(req,res)=>{
        models
        .users
        .create(req.body)
        .then(x=>{res.json(x)})
    })

    app.get('/user/:id', (req, res) => {
        models
        .users
        .findByPK(req.params.id)
        .then(x=>{res.json(x)})
    })

    
    app.put('/user/:id',(req,res)=>{
        models
        .users
        .update(req.body,{
            where:{
                id:req.params.id
            }
        })
        .then(()=>console.log('update OK'))
    })


    app.delete('/user/:id',(req,res)=>{
        models
        .users
        .destroy({
            where:{
                id:req.params.id
            }
        })
        .then(()=>console.log('delete ok'))
    })


}

