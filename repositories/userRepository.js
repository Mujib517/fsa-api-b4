const User = require('../models/user.model');

const create = (data) => {
    const user = new User(data);
    return user.save();
};

const getByEmail = (email) => {
    return User.findOne({ email: email },
        { password: 1, role: 1, email: 1 });
};

module.exports = {
    create,
    getByEmail,
}