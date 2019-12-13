const models = require ('../models')

module.exports = app => {

    app.get('/users',(req,res)=>{
        models
        .users
        .findAll({include : [models.freelancer]})
        .then(x=>{res.json(x)})
    })

     app.post('/users',(req,res)=>{
        models
        .users
        .create(req.body)
        .then(newUser =>{
            newUser.addFreelancer(req.body.freelancerId)
            res.json(newUser)
        })
    })

    app.get('/user/:id', (req, res) => {
        models
        .users
        .findByPk(req.params.id)
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

