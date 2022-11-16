const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    productId: { type: String, required: [true, 'Product Id is required'] },
    subject: { type: String, required: [true, 'Subject is reuqired'] },
    message: { type: String, required: [true, 'Message is reuqired'] },
    rating: { type: Number, required: [true, 'Rating is reuqired'] },
    createdDate: Date,
    updatedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('review', schema);