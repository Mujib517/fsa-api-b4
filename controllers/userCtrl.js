const userRepository = require('../repositories/userRepository');
const logger = require('../utils/appLogger');
const crypto = require('../utils/crypto');
const jwt = require('jsonwebtoken');

const alreadyExists = (err) => {
    return err
        && err.message
        && err.message.indexOf('duplicate key') > -1;
};

const signup = async (req, res) => {
    try {
        const hash = await crypto.getHash(req.body.password);
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

const signin = async (req, res) => {
    const data = req.body;
    const user = await userRepository.getByEmail(data.email);

    if (!user) {
        res.status(404); // unauthorized
        res.send('Email doesnt exist');
        return;
    }

    const valid = await crypto.verify(data.password, user.password);

    if (valid) {
        const token = jwt.sign({ email: user.email, role: user.role }, 'secret', {
            expiresIn: '1d'
        });
        res.status(200);
        res.json({
            email: user.email,
            token: token
        });
    } else {
        res.status(401);
        res.send('Invalid email or password');
    }
};

module.exports = {
    signup,
    signin,
};