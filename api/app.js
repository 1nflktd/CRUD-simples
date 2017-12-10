var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS
app.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "application/json");
	next();
});

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
	console.log("Listening on port %s...", server.address().port);
});
