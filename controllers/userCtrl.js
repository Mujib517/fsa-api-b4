const userRepository = require('../repositories/userRepository');
const logger = require('../utils/appLogger');

const signup = async (req, res) => {
    try {
        await userRepository.create(req.body);

        res.status(201);
        res.send();
    } catch (err) {
        logger.error(err);
        res.status(500);
        res.send('Internal Server Error');
    }
};

module.exports = {
    signup,
}