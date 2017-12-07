import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const schema = new mongoose.Schema(
	{
		email: { type: String, required: true, lowercase: true, index: true },
		passwordHash: { type: String, required: true }
	}, 
	{ timestamps: true }
);

schema.methods.isValidPassword = function isValidPassword(password) {
	return bcrypt.compareSync(password, this.passwordHash);
};

// first parameter (email) is public data
// second parameter is secret key for encryption
schema.methods.generateJWT = function generateJWT() {
	return jwt.sign({
		email: this.email
	}, process.env.JWT_SECRET)
};

// object to pass down to client
schema.methods.toAuthJSON = function toAuthJSON() {
	return {
		email: this.email,
		token: this.generateJWT()
	}
};

export default mongoose.model('User', schema);