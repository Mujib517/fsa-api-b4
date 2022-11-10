const express = require('express');
const userCtrl = require('../controllers/userCtrl');

const router = express.Router();

// http://localhost:3000/api/users/signup
// POST: http://localhost:3000/api/users/signin

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.signin);

module.exports = router;