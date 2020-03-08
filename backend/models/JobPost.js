const mongoose = require("mongoose");
const config = require('../config/database');
const Schema = mongoose.Schema;

let JobPostSchema = new Schema({
	Title: {
		type: String,
		required: true
	},
	Company: {
		type: String,
		required: true
	},
	Location: {
		type: String,
		required: true
	},
	Pay: {
		type: String
	},
	Posted: {
		type: String
	},
	Link: {
		type: String,
		required: true,
		unique: true
	},
	Timestamp: {
		type: String,
		required: true
	}
}, {
	collection: 'JobApps'
});

const JobPost = module.exports = mongoose.model('JobPost', JobPostSchema);

module.exports.getJobPostById = function (id, callback) {
	JobPost.findById(id, callback);
}

module.exports.getJobPostByLink = function (link, callback) {
	const query = { Link: link };
	JobPost.findOne(query, callback);
}

module.exports.getJobPostByTitle = function (title, callback) {
	const query = { Title: title };
	JobPost.find(query, callback);
}

module.exports.getJobPostByCompany = function (company, callback) {
	const query = { Company: company };
	JobPost.find(query, callback);
}

module.exports.getJobPostByLocation = function (location, callback) {
	const query = { Location: location };
	JobPost.find(query, callback);
}

module.exports.getJobPostByPay = function (pay, callback) {
	const query = { Pay: pay };
	JobPost.find(query, callback);
}

module.exports.getJobPostByPosted = function (posted, callback) {
	const query = { Posted: posted };
	JobPost.find(query, callback);
}


module.exports.getAllJobPosts = function (filter, callback) {
	JobPost.find(filter, callback);
}