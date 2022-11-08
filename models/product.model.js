const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Brand is mandatory'],
        maxLength: [20, 'Atmost 20 chars'],
        minLength: [3, 'Atleast 3 chars'],
    },
    model: String,
    price: { type: Number, required: [true, 'Price is mandatory'] },
    inStock: Boolean,
    discount: Number,
    createdDate: Date,
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const productModel = mongoose.model('product', schema);

module.exports = productModel;
