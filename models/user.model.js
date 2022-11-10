const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: { type: String, required: [true, 'Email is reuqired'], unique: true },
    password: { type: String, required: [true, 'Password is reuqired'] },
    firstName: { type: String, required: [true, 'Password is reuqired'] },
    lastName: { type: String, required: [true, 'Password is reuqired'] },
    role: { type: Number, default: 1 },
    createdDate: Date,
    updatedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user', schema);