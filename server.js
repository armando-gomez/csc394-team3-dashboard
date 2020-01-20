//Install express server
const express = require('express');
const path = require('path');
var mongodb = require("mongodb");
var bodyParser = require("body-parser");

var CONTACTS_COLLECTION = "contacts";

const app = express();
app.use(bodyParser.json());

var db;

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/csc394-team3-dashboard'));

app.get('*', function (req, res) {
	// Replace the '/dist/<to_your_project_name>/index.html'
	res.sendFile(path.join(__dirname + '/dist/csc394-team3-dashboard/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	// Save database object from the callback for reuse.
	db = client.db();
	console.log("Database connection ready");

	// Initialize the app.
	var server = app.listen(process.env.PORT || 8080, function () {
		var port = server.address().port;
		console.log("App now running on port", port);
	});
});

function handleError(res, reason, message, code) {
	console.log("ERROR: " + reason);
	res.status(code || 500).json({ "error": message });
}