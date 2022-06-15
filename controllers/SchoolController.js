const School = require('../models/School');

const index = async (req, res, next) => {
	try {
		const allSchool = await School.find({});
		res.json(allSchool);
	} catch (error) {
		next(error);
	}
};

const show = async (req, res) => {
	try {
		const result = await School.find({ _id: req.params.id });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const addSchool = new School(req.body);
		const result = await addSchool.save();
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const result = await School.findByIdAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true }
		);
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const destroy = async (req, res, next) => {
	try {
		const result = await School.findByIdAndDelete({ _id: req.params.id });
		if (result) {
			return res.json({ msg: 'School have deleted' });
		} else {
			// return res.status(404).json({msg: 'School not found'})
			throw new Error('School not found');
		}
	} catch (error) {
		next(error);
	}
};

module.exports = { index, show, create, update, destroy };
