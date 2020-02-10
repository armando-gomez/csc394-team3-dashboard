const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

let User = require('../models/User');

router.post('/register', (req, res, next) => {
	let newUser = new User({
		email: req.body.email,
		password: req.body.password,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		usertype: req.body.usertype
	});

	User.addUser(newUser, (err, user) => {
		if(err) {
			res.json({success: false, msg: 'Failed to register user'});
		} else {
			res.json({success: true, msg: 'User registered', user: user});
		}
	});
});

module.exports = router;