// Dependencies
//----------------------------------------------------
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");


const PORT = process.env.PORT || 3000;
const app = express();

const routes = require("./routes/index.js");

// Middleware
//----------------------------------------------------

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Routing
//----------------------------------------------------
app.use(routes);

// Listening to the server on port 3000
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});