const express = require('express');
const router = express.Router();

//User Register route
router.post('/register', (req, res, next) => {
 res.send('Register');
});

//User auth route
router.post('/authenticate', (req, res, next) => {
 res.send('Auth');
});

//User profile route
router.get('/profile', (req, res, next) => {
 res.send('profile');
});

module.exports = router;
