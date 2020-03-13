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
	collection: 'NewJobData'
});

const JobPost = module.exports = mongoose.model('JobPost', JobPostSchema);

module.exports.getJobPostById = function (id, callback) {
	JobPost.findById(id, callback);
}

module.exports.getJobPostByLink = function (link, callback) {
	const query = { Link: link };
	JobPost.findOne(query, callback);
}

module.exports.getAllJobPosts = function (filter, callback) {
	JobPost.find(filter, callback);
}