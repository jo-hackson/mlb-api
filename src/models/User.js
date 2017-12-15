import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema(
	{
		email: { type: String, required: true, lowercase: true, index: true, unique: true },
		passwordHash: { type: String, required: true },
		confirmed: { type: Boolean, default: false }
	}, 
	{ timestamps: true }
);

schema.methods.isValidPassword = function isValidPassword(password) {
	return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.setPassword = function setPassword(password) {
	this.passwordHash = bcrypt.hashSync(password, 10);
};

// first parameter (email) is public data
// second parameter is secret key for encryption
schema.methods.generateJWT = function generateJWT() {
	return jwt.sign(
		{
			email: this.email
		}, 
		process.env.JWT_SECRET
	);
};

// object to pass down to client
schema.methods.toAuthJSON = function toAuthJSON() {
	return {
		email: this.email,
		confirmed: this.confirmed,
		token: this.generateJWT()
	};
};

schema.plugin(uniqueValidator, { message: 'this email is already taken' });


export default mongoose.model('User', schema);