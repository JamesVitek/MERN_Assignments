const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must have at least three characters"]
    },
    type: {
        type: String,
        required: [true, "Price is required"],
        minlength: [3, "Pet type must be three or more characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Pet description must be three or more characters long"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
},{timestamps: true});


const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
