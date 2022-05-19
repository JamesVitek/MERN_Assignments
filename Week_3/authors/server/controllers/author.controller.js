const Author = require("../models/author.model");

module.exports.hello = (req, res) => {
    res.json({msg: "Hello Mongoose"});
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthor=>{
            res.json({results: allAuthor})
        })
        .catch(err => res.json(err));
}

module.exports.makeAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor=>{
        res.json({results: newAuthor})
    })
    .catch(err => res.json({error: err}));
}

module.exports.findAuthor = (req, res) => {
    Author.find({_id: req.params.id})
    .then(oneAuthor=>{
        res.json({results: oneAuthor})
    })
    .catch(err => res.json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.updateOne({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedAuthor=>{
        res.json({results: updatedAuthor})
    })
    .catch(err => res.json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(deletedAuthor=>{
        res.json({results: deletedAuthor})
    })
    .catch(err => res.json(err));
}

module.exports.randomAuthor = (req, res) => {
    Author.find()
    .then(randomAuthor=>{
        let random = Math.floor(Math.random()*randomAuthor.length)
        res.json({results: randomAuthor[random]})
    })
    .catch(err => res.json(err));
}