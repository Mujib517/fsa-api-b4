const User = require('../models/user.model');

const create = (data) => {
    const user = new User(data);
    return user.save();
};

module.exports = {
    create,
}