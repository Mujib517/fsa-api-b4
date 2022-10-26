const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// configuration
router.get('/', function (req, res) {
    const filePath = path.resolve(__dirname, 'index.html');
    res.status(200);
    res.sendFile(filePath);
});

// monitoring
// error
router.get('/health', function (req, res) {
    res.status(200);
    const info = { status: 'Up' };
    res.json(info);
});

module.exports = router;
