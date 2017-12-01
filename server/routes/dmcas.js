const express = require('express');
const router = express.Router();
const ImageCollection = require('../models/imageCollection');
const config = require('../config/database');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

var jsonParser = bodyParser.json();

router.get('/getDmca', function (req, res, next) {
    res.send('getting dcma');
    /*Dmca.find({}, function (err, dmcas) {

        if (err) {
            res.send(err);
        }
        res.json(dmcas);
    });*/

});


router.post('/updateDmca', function (req, res, next) {
    res.send('posting dcma');

    /*var dmca = new Dmca();
       dmca.title = req.body.title,
       dmca.body = req.body.body

    dmca.save(function (err) {
        if (err) {

            res.send(err);
        }

        res.json(201, dmca);
    });*/

});

module.exports = router;