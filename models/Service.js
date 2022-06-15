const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
	{
		school_id: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'School',
		},
		car_no: { type: Number },
		start_date: { type: Date, default: Date.now },
		end_date: { type: Date, default: Date.now },
	},
	{
		timestamps: true,
	}
);

const Service = mongoose.model('service', ServiceSchema);
module.exports = Service;
