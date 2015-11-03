// grab the packages we need for the user model
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')

// set up our user schema - what do we want our user object to look like?
var UserSchema = new Schema({
	name: String,
	username: { type: String, required: true, index: { unique: true}},
	password: { type: String, required: true, select: false }
})

// do this BEFORE saving
UserSchema.pre('save', function(next){
	var user = this;
	// if the user's password is NOT MODIFIED, just move on by calling next()
	if(!user.isModified('password')){
		return next();
	}
	// if the user's password HAS been modified, or it is a new user, do the following:
	bcrypt.hash(user.password, null, null, function(err, hash){
		if(err){
			return next(err)
		}
		user.password = hash
		next()
	})
})

module.exports = mongoose.model('User', UserSchema)








 