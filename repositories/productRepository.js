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

// const getById = (id) => productModel.findOne({
//     _id: id
// });

const getById = (id) => {
    const projection = { __v: 0, createdDate: 0, updatedDate: 0 };
    return productModel.findById(id, projection);
}

const remove = (id) => {
    return productModel.deleteOne({ _id: id });
}

// username & password
// 5 clicks
// backdoors
// code reviews 3months
// quality
// secrets
// dealer -> buy -> fees, taxes -> pay -> 
// Enthusiasts, learning
// infosys 
// 10hr - 5hrs
// Big billion
module.exports = {
    get,
    save,
    getById,
    remove,
};
