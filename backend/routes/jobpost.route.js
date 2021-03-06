const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

let JobPost = require('../models/JobPost');

router.get('/all', (req, res) => {
	JobPost.getAllJobPosts({}, (err, jobposts) => {
		res.json(jobposts);
	});
});

module.exports = router;