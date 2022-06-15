const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema(
	{
		school_name: { type: String },
		student_sum: { type: Number },
	},
	{
		timestamps: true,
	}
);

const School = mongoose.model('school', SchoolSchema);
module.exports = School;
