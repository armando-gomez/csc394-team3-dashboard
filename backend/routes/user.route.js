const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

let User = require('../models/User');

router.post('/register', [
		check('email').isEmail()
	], (req, res, next) => {
		const errors = validationResult(req);
		if(!errors.isEmpty()) {
			return res.status(422).json({errors: errors.array() });
		}
		
		let newUser = new User({
			email: req.body.email,
			password: req.body.password,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			usertype: req.body.usertype
		});

		User.addUser(newUser, (err, user) => {
			if (err) {
				res.json({ success: false, msg: 'Failed to register user' });
			} else {
				res.json({ success: true, msg: 'User registered', user: user });
			}
		});
});

router.post('/login', (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;

	User.getUserByEmail(email, (err, user) => {
		if (err) throw err;
		if (!user) {
			return res.json({ success: false, msg: 'User not found' });
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				const token = jwt.sign({ data: user }, config.secret, {
					expiresIn: 604800
				});
				res.json({
					success: true,
					token: 'JWT' + token,
					user: {
						id: user._id,
						email: user.email,
						firstname: user.firstname,
						lastname: user.lastname,
						usertype: user.usertype
					}
				})
			} else {
				return res.json({ success: false, msg: 'Wrong password' });
			}
		})
	})
})

module.exports = router;