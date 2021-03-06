const mongoose = require('mongoose');
const { model } = require('./Category');
const { Schema } = mongoose;

const schema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    imagePath: {
        type: String,
        default: 'https://via.placeholder.com/250x250.png?text=No+Image',
    },
    quantity: {
        type: Number,
        default: 0,
    },
    unitPrice: {
        type: Number,
        default: 0,
    },
    categoryId: {
        type: String,
    },
    status: {
        type: String,
        default: 'created',
    },
    deletedAt: {
        type: Date,
    },

}, {timestamps:true, collection:'Products'});

module.exports = Product = mongoose.model('Product', schema);
