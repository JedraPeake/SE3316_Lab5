const express = require('express');
const router = express.Router();

//User Register route
router.get('/register', (req, res, next) => {
 res.send('Register');
});

//User auth route
router.get('/authenticate', (req, res, next) => {
 res.send('Auth');
});

//User profile route
router.get('/profile', (req, res, next) => {
 res.send('profile');
});

//User validate route
router.get('/validate', (req, res, next) => {
 res.send('validate');
});

module.exports = router;
