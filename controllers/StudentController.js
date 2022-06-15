const Student = require('../models/Student');

const index = async (req, res, next) => {
	try {
		const allStudent = await Student.find({});
		res.json(allStudent);
	} catch (error) {
		next(error);
	}
};

const show = async (req, res) => {
	try {
		const result = await Student.find({ _id: req.params.id });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const addStudent = new Student(req.body);
		const result = await addStudent.save();
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const result = await Student.findByIdAndUpdate(
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
		const result = await Student.findByIdAndDelete({ _id: req.params.id });
		if (result) {
			return res.json({ msg: 'Student have deleted' });
		} else {
			// return res.status(404).json({msg: 'Student not found'})
			throw new Error('Student not found');
		}
	} catch (error) {
		next(error);
	}
};

module.exports = { index, show, create, update, destroy };
