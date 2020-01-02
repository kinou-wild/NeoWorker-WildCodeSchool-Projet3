const models = require ('../models/users')




module.exports = app => {

    app.get('/admin',(req,res)=>{
        models
        .users
        .findAll({include : [models.freelancer,models.missions]})
        .then(x=>{res.json(x)})
    })

    //post a user freelancer with tj
     app.post('/admin/freelancers',(req,res)=>{
        models
        .users
        .create(req.body)
        .then(newFree =>{
            newFree.addFreelancer(req.body.freelancerId)
            res.json(newFree)
        })
    })

    //post a user mission with tj
    app.post('/admin/missions',(req,res)=>{
        models
        .users
        .create(req.body)
        .then(newMission =>{
            newMission.addMission(req.body.missionId)
            res.json(newMission)
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

