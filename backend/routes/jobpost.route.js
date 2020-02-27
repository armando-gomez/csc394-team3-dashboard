const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

let JobPost = require('../models/JobPost');

router.get('/jobs/all', (req, res) => {
	JobPost.getAllJobPosts({}, (err, jobposts) => {
		if(err) throw err;
		if(!jobposts) {
			return res.json(jobposts);
		}
	})
})