const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

let User = require('../models/User');

const users = "users.json";

router.post('/register', [
	check('email').isEmail()
], (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(422).json({ errors: errors.array() });
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

router.post('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.getUserByEmail(email, (err, user) => {
		if (err) throw err;
		if (!user) {
			res.json({ success: false, msg: 'User not found' });
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
				});
			} else {
				res.json({ success: false, msg: 'Wrong password' });
			}
		});
	});
});

router.put('/update', [
	check('email').isEmail()
], (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	const oldEmail = req.body.oldEmail;
	const newEmail = req.body.email;
	const oldPassword = req.body.password;
	const newPassword = req.body.update_password;
	const usertype = req.body.usertype;

	User.getUserByEmail(oldEmail, (err, user) => {
		if (err) throw err;
		if (!user) {
			res.json({ success: false, msg: 'User not found' });
		}
		User.comparePassword(oldPassword, user.password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				if (oldEmail === newEmail) { //email is the same
					if (newPassword === "") {
						//check for empty newPassword, if empty then only update usertype
						user.password = oldPassword;
						user.usertype = usertype;
						User.updateUser(oldEmail, user, (err, update) => {
							if (err) {
								res.json({ succes: false, msg: 'Email already exists' });
							}
							if (!update) {
								res.json({ succes: false, msg: 'User not updated' });
							} else {
								const token = jwt.sign({ data: update }, config.secret, {
									expiresIn: 604800
								});
								res.json({
									success: true,
									token: 'JWT' + token,
									msg: 'User updated',
									user: update
								});
							}
						});
					} else {
						//newPassword is not empty, compare with previous password (potential of user typing in same password again)
						User.comparePassword(oldPassword, newPassword, (err, isMatch) => {
							if (err) throw err;
							if (isMatch) { //new and old match, update usertype
								user.usertype = usertype;
								User.updateUser(oldEmail, user, (err, update) => {
									if (err) throw err;
									if (!update) {
										res.json({ succes: false, msg: 'User not updated' });
									} else {
										const token = jwt.sign({ data: update }, config.secret, {
											expiresIn: 604800
										});
										res.json({
											success: true,
											token: 'JWT' + token,
											msg: 'User updated',
											user: update
										});
									}
								});
							} else {
								//old and new passwords are different, update usertype and password for user.
								user.password = oldPassword;
								user.usertype = usertype;
								User.updateUser(oldEmail, user, (err, update) => {
									if (err) {
										res.json({ succes: false, msg: 'Email already exists' });
									}
									if (!update) {
										res.json({ succes: false, msg: 'User not updated' });
									} else {
										const token = jwt.sign({ data: update }, config.secret, {
											expiresIn: 604800
										});
										res.json({
											success: true,
											token: 'JWT' + token,
											msg: 'User updated',
											user: update
										});
									}
								});
							}
						});
					}
				} else { //old and new email are different
					if (newPassword === "") {
						//newPassword is empty, update email and usertype for user
						user.email = newEmail;
						user.password = oldPassword;
						user.usertype = usertype;
						User.updateUser(oldEmail, user, (err, update) => {
							if (err) {
								res.json({ succes: false, msg: 'Email already exists' });
							}
							if (!update) {
								res.json({ succes: false, msg: 'User not updated' });
							} else {
								const token = jwt.sign({ data: update }, config.secret, {
									expiresIn: 604800
								});
								res.json({
									success: true,
									token: 'JWT' + token,
									msg: 'User updated',
									user: update
								});
							}
						});
					} else {
						//newPassword is not empty, compare with previous password (potential of user typing in same password again)
						User.comparePassword(oldPassword, newPassword, (err, isMatch) => {
							if (err) throw err;
							if (isMatch) { //new and old match, update usertype and email
								user.email = newEmail;
								user.usertype = usertype;
								User.updateUser(oldEmail, user, (err, update) => {
									if (err) {
										res.json({ succes: false, msg: 'Email already exists' });
									}
									if (!update) {
										res.json({ succes: false, msg: 'User not updated' });
									} else {
										const token = jwt.sign({ data: update }, config.secret, {
											expiresIn: 604800
										});
										res.json({
											success: true,
											token: 'JWT' + token,
											msg: 'User updated',
											user: update
										});
									}
								});
							} else {
								//old and new passwords are different, update all fields for user.
								user.email = newEmail;
								user.password = oldPassword;
								user.usertype = usertype;
								User.updateUser(oldEmail, user, (err, update) => {
									if (err) {
										res.json({ succes: false, msg: 'Email already exists' });
									}
									if (!update) {
										res.json({ succes: false, msg: 'User not updated' });
									} else {
										const token = jwt.sign({ data: update }, config.secret, {
											expiresIn: 604800
										});
										res.json({
											success: true,
											token: 'JWT' + token,
											msg: 'User updated',
											user: update
										});
									}
								});
							}
						});


					}
				}
			} else {
				res.json({ success: false, msg: 'Current Password Not Correct' });
			}
		});
	});
});

module.exports = router;