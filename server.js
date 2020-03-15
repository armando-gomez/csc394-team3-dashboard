const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const passport = require('passport');
const config = require("./backend/config/database");

mongoose.Promise = global.Promise;
mongoose.connect(config.db).then(() => {
	console.log('Database sucessfully connected')
},
	error => {
		console.log('Database could not connected: ' + error)
	}
);

const userRoute = require('./backend/routes/user.route');
const jobRoute = require('./backend/routes/jobpost.route');
const app = express();

corsOptions = {
	origin: "https://team3-dashboard-chae.herokuapp.com",
	optionsSuccessStatus: 200
};

app.use(cors());

app.use(express.static(__dirname + '/dist/csc394-team3-dashboard'));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./backend/config/passport')(passport);

app.use("/user", userRoute);
app.use("/jobposts", jobRoute);

app.get('/', (req, res) => {
	res.send("invalid endpoint");
});

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname + '/dist/csc394-team3-dashboard/index.html'));
});

app.listen(process.env.PORT || 4200);