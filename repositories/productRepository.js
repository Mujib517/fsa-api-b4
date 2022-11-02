const productModel = require('../models/product.model');

const get = () => {
    return productModel.find({},
        { updatedDate: 0, createdDate: 0, __v: 0 });
};

const save = (data) => {
    data.createdDate = new Date();
    const Product = new productModel(data);
    return Product.save();
}

module.exports = {
    get,
    save,
};
