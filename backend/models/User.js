const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
	email: {
		type: String
	},
	password: {
		type: String
	},
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	usertype: {
		type: String
	}
}, {
	collection: 'users'
});

module.exports = mongoose.model('User', User);