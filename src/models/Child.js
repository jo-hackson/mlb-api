import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema(
	{
		childName: { type: String, required: true, index: true },
		balance: { type: Number, required: true },
		parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
	},
	{ timestamps: true }
);

// object to pass down to client
// information available to client
schema.methods.toAuthJSON = function toAuthJSON() {
	return {
		childName: this.childName,
		balance: this.balance
	};
};


export default mongoose.model('Child', schema);