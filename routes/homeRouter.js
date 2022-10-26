const express = require('express');
const homeCtrl = require('../controllers/homeCtrl');

const router = express.Router();
// configuration
// handler
// layer
router.get('/', homeCtrl.home);

// monitoring
// error
router.get('/health', homeCtrl.health);

module.exports = router;
