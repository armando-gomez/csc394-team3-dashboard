const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

let User = require('../models/User');

router.post('/register', (req, res, next) => {
	res.send('hello world');
})

module.exports = userRoute;