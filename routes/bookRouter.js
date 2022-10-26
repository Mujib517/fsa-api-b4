const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');

const router = express.Router();

router.get('/', bookCtrl.get);

module.exports = router;