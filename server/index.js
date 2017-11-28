const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

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

index.use('/users', users);

index.use(bodyParser.json);

index.listen(port, () => {
  console.log('Server started on port '+port);
});