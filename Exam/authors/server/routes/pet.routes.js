const PetController = require("../controllers/Pet.controller");

module.exports = (app) => {
    app.get("/api/hello", PetController.hello);
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/makePet", PetController.makePet);
    app.get("/api/randomPet", PetController.randomPet);
    app.get("/api/findPet/:id", PetController.findPet)
    app.put("/api/updatePet/:id", PetController.updatePet)
    app.delete("/api/deletePet/:id", PetController.deletePet)
}