const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [3, "Author must have at least three characters"]
    }
    // ,
    // price: {
    //     type: Number,
    //     required: [true, "Price is required"],
    //     minlength: [1, "Price must have a value"]
    // },
    // description: {
    //     type: String,
    //     required: [true, "Description is required"],
    //     minlength: [2, "Description must be 2+ character long"]
    // }
},{timestamps: true});


const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
