const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, "Title is required"],
        minlength : [2, "Your title needs to be longer than that"]
    },
    price:{
        type: Number,
        required: [true, "Must include a price"],
        min: [0, "Price must be a positive value"]
    },
    description:{
        type:String,
        required: [true, "Description must be required"],
        minlength : [2, "Your description needs to be longer than that"]
    }
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product