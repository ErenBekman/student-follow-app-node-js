const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentSchema = new Schema(
	{
		full_name: { type: String, required: true },
		parent_phone: { type: Number },
		wp_no: { type: Number },
	},
	{
		timestamps: true,
	}
);

const Parent = mongoose.model('parent', ParentSchema);
module.exports = Parent;
