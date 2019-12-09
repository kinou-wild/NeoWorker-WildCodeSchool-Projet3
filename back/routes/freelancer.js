const models = require('../models')

module.exports = function (app) {

    //recherche freelancer par id
    app.get('/freelancer/profil/show/:id', (req, res) =>
        models
        .freelancer
        .findByPk(req.params.id)
        .then(e => res.json(freelancer))
    );

    //modif freelancer
    app.put('/freelancer/profil/update/:id', (req, res) =>
        models
        .freelancer
        .update({
            id:"",
            img: "",
            title: "",
            firstname: "",
            lastname: "",
            address: "",
            mobilite: 0,
            pref_lieu_de_travail: "",
            disponibilite: "",
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

    //création freelancer
    app.post('/freelancer/profil/post/:id', (req, res) =>
        models
        .freelancer
        .create({ 
            id:"",
            img:"",
            title:"",
            firstname:"",
            lastname:"",
            address:"",
            mobilite:0,
            pref_lieu_de_travail:"",
            disponibilite:"",
            fourchette_tarifaire:"",
            password: "",
            email: ""

        }, {
            where : {
                id: req.params.id
            }
            
        })
        .then(()=> console.log ("Profil créer"))
    );

}