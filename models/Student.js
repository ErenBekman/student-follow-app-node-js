const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
	{
		parent_id: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Parent',
		},
		school_id: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'School',
		},
		service_id: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Service',
		},
		name: { type: String, required: true },
		address: { type: String },
		start_date: { type: Date, default: Date.now },
		phone_no: { type: Number, required: true },
		class_no: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;
