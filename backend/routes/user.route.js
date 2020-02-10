const express = require('express');
const app = express();
const userRoute = express.Router();

// Employee model
let User = require('../models/User');

// Add Employee
userRoute.route('/register').get(function (req, res, next) {
	res.send('hello world');
	// User.create(req.body, (error, data) => {
	// 	if (error) {
	// 		return next(error)
	// 	} else {
	// 		res.json(data)
	// 	}
	// });
});

module.exports = userRoute;