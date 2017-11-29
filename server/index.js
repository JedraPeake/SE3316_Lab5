const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//var port = 8081;
//var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/nasa-webApp')
mongoose.connect(config.database);
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const index = express();

const users = require('./routes/users');

index.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

//port number
var port = process.env.PORT || 8080;

index.use(cors());

// Set Static Folder
index.use(express.static(path.join(__dirname, 'public')));
//index.use(express.static(path.join(__dirname, '/../nasa-webApp/dist')));

index.use('/users', users);

//index.use(bodyParser.urlencoded({ extended: true }));
index.use(bodyParser.json);

index.use(passport.initialize());
index.use(passport.session());

require('./config/passport')(passport);

index.listen(port, () => {
  console.log('Server started on port '+port);
});