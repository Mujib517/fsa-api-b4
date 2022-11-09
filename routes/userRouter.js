const express = require('express');
const userCtrl = require('../controllers/userCtrl');

const router = express.Router();

// http://localhost:3000/api/users/signup
router.post('/signup', userCtrl.create);

module.exports = router;