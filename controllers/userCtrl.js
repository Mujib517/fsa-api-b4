const bcrypt = require('bcrypt');

const userRepository = require('../repositories/userRepository');
const logger = require('../utils/appLogger');

const alreadyExists = (err) => {
    return err
        && err.message
        && err.message.indexOf('duplicate key') > -1;
};


const signup = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 1);
        req.body.password = hash;
        req.body.createdDate = new Date();

        await userRepository.create(req.body);

        res.status(201);
        res.send();
    } catch (err) {
        logger.error(err);

        if (alreadyExists(err)) {
            res.status(409); // conflict
            res.send('User already exists');
        } else {
            res.status(500);
            res.send('Internal Server Error');
        }
    }
};

module.exports = {
    signup,
}