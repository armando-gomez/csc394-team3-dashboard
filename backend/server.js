var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var cors = require("cors");
const path = require('path');
let dbConfig = require('./database/db');

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

const userRoute = require('../backend/routes/user.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cors());

app.use(express.static(path.join(__dirname + '/dist/csc394-team3-dashboard')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname + '/dist/csc394-team3-dashboard/index.html'));
});

app.use('/api', userRoute);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
	console.log('Connected to port ' + port);
});

app.use((req, res, next) => {
	next(createError(404));
});

function createError(err, req, res, next) {
	console.error(err.message);
	if (!err.statusCode) err.statusCode = 500; 
	res.status(err.statusCode).send(err.message);
}

// app.use(createError());

