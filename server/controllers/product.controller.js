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
module.exports.createProduct = (req, res) => {
    Prod.create(req.body)
        .then(newProd => res.json(newProd))
        .catch(err => console.log(err))
}
module.exports.oneProduct = (req, res) => {
    const {id} = req.params;
    Prod.findOne({_id:id})
        .then(oneProd => res.json(oneProd))
        .catch(err => console.log("ERR: ", err))
}
module.exports.editProduct = (req, res) =>{
    const {id} = req.params;
    Prod.findByIdAndUpdate({_id:id}, req.body,{new:true})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}
module.exports.deleteProduct = (req, res) =>{
    const {id} = req.params;
    Prod.deleteOne({_id:id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}