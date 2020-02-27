const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

let JobPost = require('../models/JobPost');

router.get('/all', (req, res) => {
	res.json({ success: true });
	// JobPost.getAllJobPosts({}, (err, jobposts) => {
	// 	console.log(jobposts);
		
	// });
});

module.exports = router;