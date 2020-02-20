const Prod = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products", Prod.allProducts)
}