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

router.get('/id', (req, res) => {
	JobPost.getJobPostById({}, (err, jobposts) => {
		res.json(jobposts);
	});
});

router.get('/title', (req, res) => {
	JobPost.getJobPostByTitle({}, (err, jobposts) => {
		res.json(jobposts);
	});
});

router.get('/company', (req, res) => {
	JobPost.getJobPostByCompany({}, (err, jobposts) => {
		res.json(jobposts);
	});
});

router.get('/location', (req, res) => {
	JobPost.getJobPostByLocation({}, (err, jobposts) => {
		res.json(jobposts);
	});
});

router.get('/pay', (req, res) => {
	JobPost.getJobPostByPay({}, (err, jobposts) => {
		res.json(jobposts);
	});
});

router.get('/posted', (req, res) => {
	JobPost.getJobPostByPosted({}, (err, jobposts) => {
		res.json(jobposts);
	});
});

router.get('/link', (req, res) => {
	JobPost.getJobPostByLink({}, (err, jobposts) => {
		res.json(jobposts);
	});
});

router.get('/timestamp', (req, res) => {
	JobPost.getJobPostByTimestamp({}, (err, jobposts) => {
		res.json(jobposts);
	});
});



module.exports = router;