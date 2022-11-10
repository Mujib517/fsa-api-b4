const bcrypt = require('bcrypt');

const getHash = (plainText) => {
    return bcrypt.hash(plainText, 1);
};

const verify = (plaintText, hash) => {
    return bcrypt.compare(plaintText, hash);
};

module.exports = {
    getHash,
    verify,
}