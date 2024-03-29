const express = require('express');
const router = express.Router();
const ImageCollection = require('../models/imageCollection');
const config = require('../config/database');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

var jsonParser = bodyParser.json();
//Create collection
router.post('/createCollection', jsonParser, (req, res, next) => {
    //res.send('Create COLLECTION');
 console.log(req.body);
 var imageCollection = req.body;
 console.log('request body : ' + JSON.stringify(imageCollection));
 let newImageCollection = new ImageCollection({
    createdBy: req.body.createdBy,
    isPrivate: req.body.isPrivate,
    description: req.body.description,
    name: req.body.name,
    dateMade: req.body.dateMade,
    lastDayRevised: req.body.lastDayRevised,
    rating: req.body.rating,
    ratingNumberList: req.body.ratingNumberList,
    listUrlList: req.body.listUrlList
  });
    
  ImageCollection.addImageCollection(newImageCollection, (err, imageCollection) => {
    if(err){
      console.log("err "+ err)    
      res.json({success: false, msg:'Failed to register image collection'});
    } else {
      res.json({success: true, msg:'Image collection created'});
    }
  });    
    
});

//Get collection 
router.get('/getCollection', jsonParser, (req, res, next) => {
    //res.send('GET COLLECTION');
});

//Get all user image collections 
router.get('/getUserCollections', jsonParser, (req, res, next) => {
    console.log(req.query.username);
    ImageCollection.find( ({createdBy:req.query.username}), (err, collections)=> {
    if(err){
      res.json({success: false, msg:'Failed to find collection'});
    } else {
      res.json({success: true, collections, msg:'Collections returned'});
    }
  })
});

//Get all collection 
router.get('/getAllCollections', jsonParser, (req, res, next) => {
    ImageCollection.find( (err, imageCollection) => {
    if(err){
      res.json({success: false, msg:'Failed to find collection'});
    } else {
      res.json({success: true, imageCollection, msg:'Collections returned'});
    }
  });
});

module.exports = router;

