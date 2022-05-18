const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product is required"],
        minlength: [1, "Product must have a value"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minlength: [1, "Price must have a value"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be 2+ character long"]
    }
},{timestamps: true});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
