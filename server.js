// Dependencies
//----------------------------------------------------
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");


const PORT = process.env.PORT || 3000;
const app = express();

// const routes = require("./routes");

// Middleware
//----------------------------------------------------
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.static('public')); 
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routing
//----------------------------------------------------
// app.use(routes);

// Routes
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/dashboard", function(req, res) {
  res.render("dashboard");
});

app.get("/search", function(req, res) {
  res.render("search");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
