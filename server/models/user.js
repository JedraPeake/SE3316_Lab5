const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  //email is the username
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmed: {
    type: Boolean,
    default: false,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  storedEmailToken: {
    type: String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}
module.exports.updateToken = function(username, token, callback){
  console.log("user update token" + username + token)
  
  User.findOneAndUpdate({ "username" : username }, { $set : { "confirmed" : "true" } }, {new: true}, (err, user)=>{
    if(err) console.log("err user " + err );
    
    console.log("user update " + user );
  });
  
}
module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    if(err) throw err;  
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}
module.exports.confirmedEmail = function(username, token, callback){
  console.log("user" + username + token)
  User.findOneAndUpdate({ "username" : username }, { $set : { "storedEmailToken" : token }}, {new: true}, (err, user)=>{
    if(err) console.log("err user " + err );
    
    console.log("user " + user );
  });
}
module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}