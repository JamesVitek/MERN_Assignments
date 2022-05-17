const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/hello", JokeController.hello);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/makeJoke", JokeController.makeJoke);
    app.get("/api/randomJoke", JokeController.randomJoke);
    app.get("/api/findJoke/:id", JokeController.findJoke)
    app.put("/api/updateJoke/:id", JokeController.updateJoke)
    app.delete("/api/deleteJoke/:id", JokeController.deleteJoke)
}