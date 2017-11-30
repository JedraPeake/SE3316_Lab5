const mongoose = require('mongoose');
const config = require('../config/database');

// Image Collection Schema
const ImageCollectionSchema = mongoose.Schema({
  createdBy: {
    type: String,
    required: true
  },
  isPrivate: {
    type: Boolean,
    default: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dateMade: {
    type: Date,
    default: Date.now(),
    required: true
  },
  lastDayRevised: {
    type: Date,
    default: Date.now(),
    required: true
  },
  rating: {
    type  : Number,
  },
  ratingNumberList: {
    type : Array ,
    "default" : []    
  },
  listUrlList: {
    type : Array ,
    "default" : []
  }
});

const ImageCollection = module.exports = mongoose.model('ImageCollection', ImageCollectionSchema);

module.exports.getImageCollectionById = function(id, callback){
  ImageCollection.findById(id, callback);
}

module.exports.addImageCollection = function(newImageCollection, callback){
  newImageCollection.save(callback);
}