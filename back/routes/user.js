const models = require('../models')

//a voir si besoin 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'secret'

module.exports = app => {

        app.get('/admin', (req, res) => {
            models
                .users
                .findAll({
                    include: [models.freelancer, models.missions]
                })
                .then(x => {
                    res.json(x)
                })
        })

        //post a user freelancer with tj
        app.post('/admin/freelancers', (req, res) => {
            models
                .users
                .create(req.body)
                .then(newFree => {
                    newFree.addFreelancer(req.body.freelancerId)
                    res.json(newFree)
                })
        })

        // //post a user mission with tj
        // app.post('/admin/missions', (req, res) => {
        //     models
        //         .users
        //         .create(req.body)
        //         .then(newMission => {
        //             newMission.addMission(req.body.missionId)
        //             res.json(newMission)
        //         })
        // })

        app.get('/user/:id', (req, res) => {
            models
                .users
                .findByPk(req.params.id)
                .then(x => {
                    res.json(x)
                })
        })

        app.put('/user/:id', (req, res) => {
            models
                .users
                .update(req.body, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => console.log('update OK'))
            })

        app.delete('/user/:id', (req, res) => {
            models
                .users
                .destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => console.log('delete ok'))
        })

        //authentif/////////////////////////
        app.post('/register', (req, res) => {
            const today = new Date()
            const userData = {
                id: req.body.id,
                role: req.body.role,
                email: req.body.email,
                password: req.body.password,
                freelancerId: req.body.freelancerId,
                createdAt: today
            }
            // if(req.body.role=='admin'){
            //     return(
            //         res.status(401).send('Unauthorized')
            //     )
            // }
            models
                .users
                .findOne({
                    where: {
                        email: req.body.email
                    }
                })

                .then(user => {
                    if (!user) {
                        bcrypt.hash(req.body.password, 10, (err, hash) => {
                            userData.password = hash
                            models
                                .users
                                .create(userData, req.body)
                                .then(user => {
                                    user.addFreelancer(req.body.freelancerId) //lien avec la tj du user et du free
                                    res.json(user)
                                    res.json({
                                        status: user.email + 'Registered'
                                    })
                                })
                                .catch(err => res.send(err))
                        })
                    } else {
                        res.json('already exist')
                    }
                })
                .catch(err => console.log(err))
        })

app.post('/login', (req, res) => {
    models
        .users
        .findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password, user.role)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY)
                    res.send(token)
                }

            } else {
                res.send('user doesnt exist')
            }
        })
        .catch(err => res.send(err))
})

}