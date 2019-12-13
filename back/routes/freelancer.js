const models = require('../models')
const multer = require('multer')
const express = require('express')
const path = require('path')





module.exports = function(app) {

    app.get('/freelancer/:id', (req, res) => {
        models
        .freelancer
        .findByPk(req.params.id)
        .then(x => res.json(x))
    })



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

        //ajout photo
    //public folder
    app.use(express.static('./public'))
    const storage = multer.diskStorage({
        destination: '/public/uploads',
        filename: function (req, file, cb){
            cb(null,file.fieldname + '-' + Date.now()+path.extname(file.originalname));
        }
    })

    //init upload
    const upload = multer ({
        storage: storage
    }).single('file')
    app.post('/upload',(req, res) =>{
        upload(req,res,(err) => {
            console.log('upload image')
            if(err){
                res.send('Index', {msg:err})
            }else {
                models
                .freelancer
                .create({img:req.file.originalname, path:req.file.path})
                console.log(req.file)
                res.send(req.file);
            }
            
        })
    }) 


   
}