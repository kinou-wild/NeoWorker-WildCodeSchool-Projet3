//consulter la table de tous les users
app.get('/', (req, res) =>
    models
    .users //mettre la table au choix
    .findAll()
    .then(x => res.json(x))
);

//recherche utulisateur par id
app.get('/', (req, res) =>
    models
    .users
    .findByPk(req.params.id)
    .then (e => res.json(users))
);

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
);

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
);

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
);

//modif password user
app.put('/:id', (req, res) =>
    models
    .users
    .update({
        password: ""
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(() => console.log("Mot de passe actualisé"))
);

//modif name user
app.put('/:id', (req, res) =>
    models
    .users
    .update({
        name: ""
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(() => console.log("Nom actualisé"))
);