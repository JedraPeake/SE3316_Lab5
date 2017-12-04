const express = require('express');
const router = express.Router();
const PrivacyPolicy = require('../models/privacypolicy');
const config = require('../config/database');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

var jsonParser = bodyParser.json();

router.get('/getPP', function (req, res, next) {
    PrivacyPolicy.find({}, {}, { sort: { 'dateMade' : -1 } }, function(err, post) {
         res.json(post);
    });

});

router.post('/updatePP', jsonParser, function (req, res, next) {
    let newPP = new PrivacyPolicy({
        title: "New privacy policy",
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
//router.post('/drop', jsonParser, function (req, res, next) {
  //  PrivacyPolicy.

//});
module.exports = router;