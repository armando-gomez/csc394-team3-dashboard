const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const passport = require('passport');
const config = require("./backend/config/database");

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
	useMongoClient: true
}).then(() => {
	console.log('Database sucessfully connected')
},
	error => {
		console.log('Database could not connected: ' + error)
	}
);

const userRoute = require('./backend/routes/user.route');
const app = express();

app.use(cors());

app.use(express.static(__dirname + 'public'));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./backend/config/passport')(passport);

app.use("/api", userRoute);

app.get('/', (req, res) => {
	res.send("invalid endpoint");
});

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(process.env.PORT || 8080);