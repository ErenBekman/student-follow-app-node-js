const Parent = require('../models/Parents');

const index = async (req, res, next) => {
	try {
		const allParent = await Parent.find({});
		res.json(allParent);
	} catch (error) {
		next(error);
	}
};

const show = async (req, res) => {
	try {
		const result = await Parent.find({ _id: req.params.id });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const addParent = new Parent(req.body);
		const result = await addParent.save();
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const result = await Parent.findByIdAndUpdate(
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
		const result = await Parent.findByIdAndDelete({ _id: req.params.id });
		if (result) {
			return res.json({ msg: 'Parent have deleted' });
		} else {
			// return res.status(404).json({msg: 'Parent not found'})
			throw new Error('Parent not found');
		}
	} catch (error) {
		next(error);
	}
};

module.exports = { index, show, create, update, destroy };
