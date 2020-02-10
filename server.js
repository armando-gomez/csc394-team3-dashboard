var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
const path = require('path');
let dbConfig = require("./backend/database/db");

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
	useNewUrlParser: true
}).then(() => {
	console.log('Database sucessfully connected')
},
	error => {
		console.log('Database could not connected: ' + error)
	}
)
const userRoute = require('./backend/routes/user.route');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(__dirname + '/dist/csc394-team3-dashboard'));
app.use(cors());
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname + '/dist/csc394-team3-dashboard/index.html'));
});
app.use("/api", userRoute);
app.listen(process.env.PORT || 8080);

app.use(function (err, req, res, next) {
	console.error(err.message); // Log error message in our server's console
	if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
	res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});