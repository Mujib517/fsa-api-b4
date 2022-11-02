const productModel = require('../models/product.model');
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
            await productRepository.save();
            res.status(201);
            res.send('Created');
        } catch (err) {
            res.status(500);
            res.send('Internal Server Error');
        }
    }
}

module.exports = new ProductCtrl();
