const Joke = require("../models/jokes.model");

module.exports.hello = (req, res) => {
    res.json({msg: "Hello Mongoose"});
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err => res.json(err));
}

module.exports.makeJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke=>{
        res.json({results: newJoke})
    })
    .catch(err => res.json(err));
}

module.exports.findJoke = (req, res) => {
    Joke.find({_id: req.params.id})
    .then(oneJoke=>{
        res.json({results: oneJoke})
    })
    .catch(err => res.json(err));
}

module.exports.updateJoke = (req, res) => {
    Joke.updateOne({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedJoke=>{
        res.json({results: updatedJoke})
    })
    .catch(err => res.json(err));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke=>{
        res.json({results: deletedJoke})
    })
    .catch(err => res.json(err));
}

module.exports.randomJoke = (req, res) => {
    Joke.find()
    .then(randomJoke=>{
        let random = Math.floor(Math.random()*randomJoke.length)
        res.json({results: randomJoke[random]})
    })
    .catch(err => res.json(err));
}