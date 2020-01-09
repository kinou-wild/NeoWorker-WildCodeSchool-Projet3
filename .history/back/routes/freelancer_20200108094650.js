const models = require('../models')


module.exports = function(app) {

    //get freelancer by id
    app.get('/freelancer/:id', (req, res) => {
        models
        .freelancer
        .findByPk(req.params.id)
        .then(x => res.json(x))
    })


    // get all freelancer
    app.get('/freelancers', (req,res)=>{
        models
        .freelancer
        .findAll({include : [models.users]})
        .then(x=>res.json(x))
    })



     //création freelancer
    app.post('/freelancers', (req, res) => {
        models
        .freelancer
        .create(req.body)
        .then(newFree =>{
            newFree.addUsers(req.body.userId)
            res.json(newFree)
        })

    });
    

    //modif freelancer
    app.put('/freelancer/:id', (req, res) =>
        models
        .freelancer
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log("Mise à jour faite"))
    );

   
}