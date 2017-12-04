const express = require('express');
const router = express.Router();
const Dmca = require('../models/dmca');
const config = require('../config/database');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

var jsonParser = bodyParser.json();

router.get('/getDmca', jsonParser, function (req, res, next) {
    Dmca.find({}, {}, { sort: { 'dateMade' : -1 } }, function(err, post) {
         res.json(post);
    });

});


router.post('/updateDmca', jsonParser, function (req, res, next) {
    //res.send('posting dcma');

    let newPP = new Dmca({
        title: "New dmca policy",
        body: req.body.body
    });
       //pp.title = "New privacy policy",
       //pp.body = req.body.body
    console.log("get called");
    newPP.save(function (err) {
        if (err) {
            console.log("get called err");
            res.json({success: true, err, msg:'get works'});
        }else{
            console.log("get called pass ");
            res.json({success: true, msg:'get works'});
        }
    });

});

module.exports = router;