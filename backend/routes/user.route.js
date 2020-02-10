const express = require('express');
const app = express();
const userRoute = express.Router();

// Employee model
let User = require('../models/User');

// Add Employee
userRoute.route('/register').post((req, res, next) => {
	User.create(req.body, (error, data) => {
		if (error) {
			return next(error)
		} else {
			res.json(data)
		}
	})
});

module.exports = userRoute;