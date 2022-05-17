const express = require('express');
const app = express();
const port = 8000;

//Needed for post -------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//-----------------------------

require("./server/config/mongoose.config")
require("./server/routes/jokes.routes")(app)

app.listen(port, ()=>console.log(`Listing on port: ${port}`));