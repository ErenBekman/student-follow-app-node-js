const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('user', UserSchema);
module.exports = User;
