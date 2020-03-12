const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Define collection and schema
let UserSchema = new Schema({
   email: {
	  type: String,
	  required: true,
	  unique: true
   },
   password: {
	  type: String,
	  required: true
   },
   firstname: {
	  type: String,
	  required: true
   },
   lastname: {
	  type: String,
	  required: true
   },
   usertype: {
	  type: String,
	  required: true
   }
}, {
   collection: 'users'
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback) {
	const query = {email: email};
	User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

module.exports.updateUser = function(email, newUser, callback) {
	console.log(newUser.password);
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			User.getUserByEmail(newUser.email, (err, user) => {
				if(err) throw err;
				if(!user) {
					newUser.password = hash;
					const update = {'email': newUser.email, 'password': newUser.password, 'usertype': newUser.usertype};
					const filter = {email: email};
		
					User.findOneAndUpdate(filter, update, {new: true}, callback);
				}
			});			
		});
	});
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
}