const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const EMAIL_SECRET = "emailSecret"

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'peakejedra@gmail.com',
    pass: 'peake1234'
  }
});

var jsonParser = bodyParser.json();
//User Register route
router.post('/register', jsonParser, (req, res, next) => {
 console.log(req.body);
 console.log(req.body.username);
 console.log(req.body.password);
 
 let newUser = new User({
    username: req.body.username,
    password: req.body.password,
    isAdmin: req.body.isAdmin
  });
  User.addUser(newUser, (err, user) => {
    if(err){
      console.log(err);
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
      
        var token = jwt.sign(
          {
            user: user.username,
          },
          EMAIL_SECRET,
          {
            expiresIn: '1d',
          },
          (err, emailToken) => {
            /*var req = request({
              url: 'https://lab5-jedrapeake.c9users.io:8080/confirmation',
              method: "POST",
              json: {
              	"storedEmailToken":emailToken,
              	"username":newUser.username
              }
            },*/
            //user = new User({ storedEmailToken: emailToken });
            const url = `https://lab5-jedrapeake.c9users.io:8080/confirmation/?${emailToken}`;
            User.confirmedEmail(newUser.username, emailToken);
            console.log("user save "+ emailToken)
            transporter.sendMail({
          
              from: 'nasaAPINOREPLY@gmail.com',
              to: user.username,
              subject: 'Welcome to the Nasa Web Application',
              html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
            
          })
        }
      )
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
      return res.json({success: false, msg: 'Email is not linked to an existing account'});
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

router.get('/getAllUsers', jsonParser, (req, res, next) => {
 User.find( (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to find user'});
    } else {
      res.json({success: true, user, msg:'Users returned'});
    }
  });
});
router.post('/deleteAll', jsonParser, (req, res, next) => {
  User.collection.drop();
  
});
router.post('/confirmation', jsonParser, (req, res, next) => {
  console.log(req);
  User.updateToken(req.body.username, req.body.storedEmailToken, (err, user)=>{
    if(err){
      res.json({success: false, msg:'Failed to find user'});
    } else {
      res.json({success: true, user, msg:'User update'});
    }
  });  
  res.json({success: true, msg:'User update'});//return res.send('https://lab5-jedrapeake.c9users.io:8081/login');
});
module.exports = router;
