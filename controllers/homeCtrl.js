const path = require('path');

function home(req, res) {
    const filePath = path.resolve(__dirname, 'index.html');
    res.status(200);
    res.sendFile(filePath);
}

function health(req, res) {
    res.status(200);
    const info = { status: 'Up' };
    res.json(info);
}

module.exports = {
    home: home,
    health: health
};