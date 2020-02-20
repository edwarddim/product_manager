const express = require('express')
const cors = require("cors")
// INSTANTIATE A EXPRESS SERVER OBJECT
const app = express()
// 1. CONNECT TO THE DB
require("./server/config/mongoose.config")
// 2. CONFIG EXPRESS SERVER
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
// 3. WIRES OUR EXPRESS SERVER TO LISTEN ON THE ROUTES THAT WE SETUP
require("./server/routes/product.routes")(app)

// 4. TURNS EXPRESS SERVER ON
app.listen(8000 , ()=>{
    console.log("EXPRESS SERVER ON 8000")
})