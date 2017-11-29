const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
//User Register route
router.post('/register', jsonParser, (req, res, next) => {
 console.log(req.body);
 console.log(req.body.username);
 console.log(req.body.password);
 var user = req.body;
 console.log('request body : ' + JSON.stringify(user));
 let newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  
  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
  
});

//User auth route
router.post('/authenticate', jsonParser, (req, res, next) => {
 //res.send('Auth');
 const username = req.body.username;
 const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        //const token = jwt.sign(user.toJSON(), config.secret, {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            username: user.username
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
 
});

//User profile route
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
 res.json({user: req.user});
});

module.exports = router;
