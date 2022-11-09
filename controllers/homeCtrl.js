const path = require('path');
const logger = require('../utils/appLogger');

function home(req, res) {
    logger.info('Inside home controller');
    const filePath = path.resolve(__dirname, 'index.html');
    res.status(200);
    res.sendFile(filePath);
}

function health(req, res) {
    logger.info('Health endpoing in home controller');
    res.status(200);
    const info = { status: 'Up' };
    res.json(info);
}

module.exports = {
    health,
    home,
};