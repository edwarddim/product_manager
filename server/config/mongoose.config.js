const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/products",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO JOKES DB"))
.catch(err => console.log("ERROR: ", err))