const models = require('../models')


module.exports = function(app) {

     //création freelancer
    app.post('/freelancer/profil', (req, res) => {
        models
        .freelancer
        .create(req.body)
        .then(x=> res.json(x))

    });


    //recherche freelancer par id
    app.get('/freelancer/profil/:id', (req, res) =>
        models
        .freelancer
        .findByPk(req.params.id)
        .then(x => res.json(x))

    );

    //modif freelancer
    app.put('/freelancer/profil/:id', (req, res) =>
        models
        .freelancer
        .update({
            img: "",
            title: "",
            firstname: "",
            lastname: "",
            address: "",
            mobilite: 0,
            pref_lieu_de_travail: 0,
            disponibilite: 0,
            fourchette_tarifaire: "",
            password: "",
            email: ""
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log("Mise à jour faite"))
    );

   
}