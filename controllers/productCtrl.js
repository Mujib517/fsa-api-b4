const productRepository = require('../repositories/productRepository');

const hasValidationError = (err) => {
    return err && err.message && err.message.indexOf('validation failed') > -1
};

const formatErrors = (errors) => {
    const errorResponse = [];

    // reflection
    for (let key in errors) {
        const err = {
            field: errors[key].path,
            message: errors[key].message,
        };

        errorResponse.push(err);
    }

    return errorResponse;
}

class ProductCtrl {

    async get(req, res) {
        try {
            const data = await productRepository.get();
            res.status(200);
            res.json(data);
        } catch (err) {
            res.status(500);
            res.send('Internal Server Error');
        }
    }

    async post(req, res) {
        try {
            await productRepository.save(req.body);
            res.status(201);
            res.send('Created');
        } catch (err) {
            if (hasValidationError(err)) {
                res.status(400);
                res.json(formatErrors(err.errors));
            } else {
                res.status(500);
                res.send('Internal Server Error');
            }
        }
    }

    async getById(req, res) {
        const id = req.params.id;
        const product = await productRepository.getById(id);

        res.status(200);
        res.json(product);
    }

    async remove(req, res) {
        const id = req.params.id;
        await productRepository.remove(id);

        res.status(204);
        res.send();
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;

            await productRepository.update(id, data);
            res.status(204);
            res.send();
        } catch (err) {
            console.error(err);
            res.status(500);
            res.send('Internal Server Error');
        }
    }

    async patch(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;

            await productRepository.patch(id, data);
            res.status(204);
            res.send();
        } catch (err) {
            console.error(err);
            res.status(500);
            res.send('Internal Server Error');
        }
    }
}

module.exports = new ProductCtrl();
