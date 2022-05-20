const Pet = require("../models/pet.model");

module.exports.hello = (req, res) => {
    res.json({msg: "Hello Mongoose"});
}

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPet=>{
            res.json({results: allPet})
        })
        .catch(err => res.json(err));
}

module.exports.makePet = (req, res) => {
    Pet.create(req.body)
    .then(newPet=>{
        res.json({results: newPet})
    })
    .catch(err => res.json({error: err}));
}

module.exports.findPet = (req, res) => {
    Pet.find({_id: req.params.id})
    .then(onePet=>{
        res.json({results: onePet})
    })
    .catch(err => res.json(err));
}

module.exports.updatePet = (req, res) => {
    Pet.updateOne({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedPet=>{
        res.json({results: updatedPet})
    })
    .catch(err => res.json(err));
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(deletedPet=>{
        res.json({results: deletedPet})
    })
    .catch(err => res.json(err));
}

module.exports.randomPet = (req, res) => {
    Pet.find()
    .then(randomPet=>{
        let random = Math.floor(Math.random()*randomPet.length)
        res.json({results: randomPet[random]})
    })
    .catch(err => res.json(err));
}