const models = require('../models')

module.exports = function(app) {

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
    app.post('/freelancer/profil', (req, res) =>
        models
        .freelancer
        .create({ 
            img:"",
            title:"gdrgr",
            firstname:"grgerg",
            lastname:"gdgsd",
            address:"sdrgd",
            mobilite:4,
            pref_lieu_de_travail:2,
            disponibilite:1,
            fourchette_tarifaire:1,
            password: "dfgsfd",
            email: ""

        })
            .then(x=> res.json(x))


    );

}