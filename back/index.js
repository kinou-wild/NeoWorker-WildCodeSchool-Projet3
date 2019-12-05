const express = require('express')
const models = require('./models')

const app = express()

app.get('/', (req, res) =>
    models
    .users //mettre la table voulu
    .findAll()
    .then(x => res.json(x))
)

//ajout nouvel user
app.post('/', (req, res) =>
    models
    .users //mettre la table voulu
    .create({
        role: "",
        email: "",
        password: ""
    })
    .then(e => res.json(e)))

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


models
    .sequelize
    .sync()
    .then(() => app.listen(4000, () => console.log('server is listenning')))