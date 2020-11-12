var express = require('express');
var router = express.Router();
var db = require("../models");


router.get('/event', function(req, res){
    res.send("Hello from router");
});

router.post('/subscribe/topic', function(req, res){
    db.EventTopic.create(req.body)
    .then(function(newTopic) {
        res.json(newTopic);
    })
    .catch(function(error) {
        res.send(error);
    });
});


module.exports = router;