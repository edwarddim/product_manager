const Prod = require("../models/product.model")

module.exports.allProducts = (req, res) =>{
    Prod.find()
        .then(allProds => {
            res.json(allProds)
        })
        .catch(err => {
            res.json(err)
        })
}