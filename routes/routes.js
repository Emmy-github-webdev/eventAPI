var express = require('express');
var router = express.Router();
//var db = require("../models");


router.get('/event', function(req, res){
    res.send("Hello from router");
});

router.post('/subscribe/topic', function(req, res){
    res.send("Hello from subscruber home");
});


module.exports = router;