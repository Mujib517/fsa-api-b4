const productModel = require('../models/product.model');

const getSortBy = (sort) => {
    switch (sort.toLowerCase()) {
        case 'price':
            return 'price';
        case 'discount':
            return 'discount';
        case 'brand':
            return 'brand';
        case 'model':
            return 'model';

        default:
            return 'updatedDate';
    }
};

const getSortDirection = (direction) => {
    switch (direction.toLowerCase()) {
        case 'asc':
            return 1;
        case 'desc':
            return -1;

        default:
            return 1;
    }
}

const get = (options) => {
    const { sort, direction, page, pageSize } = options;
    
    const sortByField = getSortBy(sort);
    const sortDirection = getSortDirection(direction);
    const rowsToSkip = (page - 1) * pageSize;
    return productModel.find({},
        { createdDate: 0, __v: 0 })
        .sort({ [sortByField]: sortDirection })
        .skip(rowsToSkip)
        .limit(pageSize);
};

const getCount = () => productModel.count();

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

const update = (id, data) => {
    return productModel.updateOne({ _id: id }, {
        $set: {
            brand: data.brand,
            model: data.model,
            price: data.price,
            inStock: data.inStock,
            discount: data.discount
        }
    });
};

const patch = (id, data) => {
    delete data._id;
    const updateObj = {};

    for (let key in data) {
        updateObj[key] = data[key];
    }

    return productModel.updateOne({ _id: id }, {
        $set: updateObj
    });
};

module.exports = {
    get,
    save,
    getById,
    remove,
    update,
    patch,
    getCount,
};
