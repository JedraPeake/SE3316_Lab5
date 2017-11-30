const express = require('express');
const router = express.Router();
const ImageCollectionSchema = require('../models/imageCollection');
const config = require('../config/database');
const bodyParser = require('body-parser');