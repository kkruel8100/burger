var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 8080;

// Middleware to link to static pages
app.use(express.static(path.join(__dirname, "/public")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Starts the server to begin listening
app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});