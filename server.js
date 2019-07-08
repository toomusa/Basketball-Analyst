// Dependencies
//----------------------------------------------------
const express = require("express");
const path = require("path");


const PORT = process.env.PORT || 3000;
const app = express();

const routes = require("./routes");

// Middleware
//----------------------------------------------------
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


// Routing
//----------------------------------------------------
app.use(routes);

// Listen to the server
//----------------------------------------------------
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));