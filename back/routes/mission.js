const models = require('../models')

module.exports = function(app){

//Get all mission
app.get('/missions', (req, res) => 
models
.missions
.findAll()
.then(x => res.json(x))
);

//Get missions by id
app.get('/mission/:id', (req, res) =>
models
.missions
.findByPk(req.params.id)
.then(mission => res.json(mission))
);

// Create mission 
app.post('/missions', (req, res) =>
models
.missions
.create(req.body)  
.then(x => res.json(x))
);

//UPDATE missions
app.put('/mission/:id', (req, res) => {
    models
    .missions
    .update(req.body, {
        where: {
            id: req.params.id
        }  
    }).then(() => console.log("Updated"))
});

//Delete missions
app.delete('/mission/:id', (req, res) =>
models
.missions
.destroy(req.body, {
    where: {
        id: req.params.id
    }
}) .then(() => console.log("Deleted"))
);

models
.sequelize
.sync()
.then(() => app.listen(5000, () => console.log('App listening on port 5000 !')));
};