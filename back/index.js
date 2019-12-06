const express = require('express')
const models = require('./models')

const app = express()

//consulter la table de tous les users
app.get('/', (req, res) =>
    models
    .users //mettre la table au choix
    .findAll()
    .then(x => res.json(x))
)

//ajout nouvel user
app.post('/', (req, res) =>
    models
    .users //mettre la table au choix
    .create({
        role: "user",
        email: "alexg@gmail.com",
        password: "1234"
    })
    .then(e => res.json(e[0] === 1 ? `Updated id = ${req.params.id}` : `Error on updated id = ${req.params.id}`))
)

//delete user
app.delete('/:id', (req, res) =>
    models
    .users
    .destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => console.log("Utilisateur effacer"))
)

//modif mail user
app.put('/:id', (req, res) =>
    models
    .users
    .update({
        email: ""
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(() => console.log("Email actualisé"))

)



models
    .sequelize
    .sync()
    .then(() => app.listen(4000, () => console.log('server is listenning')))