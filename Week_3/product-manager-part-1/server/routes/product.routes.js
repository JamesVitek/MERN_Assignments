const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/hello", ProductController.hello);
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/makeProduct", ProductController.makeProduct);
    app.get("/api/randomProduct", ProductController.randomProduct);
    app.get("/api/findProduct/:id", ProductController.findProduct)
    app.put("/api/updateProduct/:id", ProductController.updateProduct)
    app.delete("/api/deleteProduct/:id", ProductController.deleteProduct)
}