const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: [true, "Joke is required"],
        minlength: [5, "Joke must be 5 character long"]
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [5, "Author must be 2+ character long"]
    },
    rating: {
        type: String,
        required: [true, "Author is required"],
        minlength: [1, "Rating cant be less than 1"],
        maxlength: [10, "Rating cant be more than 10"]
    }
},{timestamps: true});


const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
