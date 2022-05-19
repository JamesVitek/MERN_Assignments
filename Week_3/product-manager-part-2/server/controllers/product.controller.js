const Product = require("../models/product.model");

module.exports.hello = (req, res) => {
    res.json({msg: "Hello Mongoose"});
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProduct=>{
            res.json({results: allProduct})
        })
        .catch(err => res.json(err));
}

module.exports.makeProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct=>{
        res.json({results: newProduct})
    })
    .catch(err => res.json({error: err}));
}

module.exports.findProduct = (req, res) => {
    Product.find({_id: req.params.id})
    .then(oneProduct=>{
        res.json({results: oneProduct})
    })
    .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.updateOne({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedProduct=>{
        res.json({results: updatedProduct})
    })
    .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deletedProduct=>{
        res.json({results: deletedProduct})
    })
    .catch(err => res.json(err));
}

module.exports.randomProduct = (req, res) => {
    Product.find()
    .then(randomProduct=>{
        let random = Math.floor(Math.random()*randomProduct.length)
        res.json({results: randomProduct[random]})
    })
    .catch(err => res.json(err));
}