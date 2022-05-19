const express = require('express');
const cors = require("cors");
const app = express();
const port = 8000;

//Needed for post -------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//-----------------------------

require("./server/config/mongoose.config")
require("./server/routes/product.routes")(app)

app.listen(port, ()=>console.log(`Listing on port: ${port}`));