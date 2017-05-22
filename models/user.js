var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var userSchema = new Schema ({
	local : {
		userName: {
			type: String,
			unique: true
		},
		password: String,
		email: {
			type: String,
			unique: true
		},
		userZip: Number,
		updated_at: { type: Date, default: Date.now },
	}
});

// var User = mongoose.model('User', UserSchema);

//Generating a hash
userSchema.methods.generateHash = function(password) { 
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
