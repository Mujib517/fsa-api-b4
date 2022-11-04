const productRepository = require('../repositories/productRepository');

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
            console.error(err);
            res.status(500);
            res.send('Internal Server Error');
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
