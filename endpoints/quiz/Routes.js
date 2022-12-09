const express = require('express');
const service = require('./Services');

const router = express();

router.get('/', (req, res) => {
    service.findAll((err, obj) =>  {
        if(obj){
            res.setHeader('Accept', '*');
            res.send(obj);
        }else{
            res.setHeader('Accept', '*');
            res.status(400).send(err);
        }
    });
});

router.post('/', (req, res) => {
    service.createWinner(req.body, (err, obj) => {
        if(obj){
            res.setHeader('Accept', '*');
            res.send(obj);
        }else{
            res.setHeader('Accept', '*');
            res.status(400).send(err);
        }
    });
});

module.exports = router;