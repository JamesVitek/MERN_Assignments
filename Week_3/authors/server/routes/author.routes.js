const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/hello", AuthorController.hello);
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.post("/api/makeAuthor", AuthorController.makeAuthor);
    app.get("/api/randomAuthor", AuthorController.randomAuthor);
    app.get("/api/findAuthor/:id", AuthorController.findAuthor)
    app.put("/api/updateAuthor/:id", AuthorController.updateAuthor)
    app.delete("/api/deleteAuthor/:id", AuthorController.deleteAuthor)
}