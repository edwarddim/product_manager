const Prod = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products", Prod.allProducts)
    app.post("/api/products", Prod.createProduct)
    app.get("/api/products/:id", Prod.oneProduct)
    app.delete("/api/products/:id", Prod.deleteProduct)
    app.put("/api/products/:id/edit", Prod.editProduct)
}