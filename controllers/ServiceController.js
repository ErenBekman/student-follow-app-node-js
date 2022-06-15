const Service = require('../models/Service');

const index = async (req, res, next) => {
	try {
		const allService = await Service.find({});
		res.json(allService);
	} catch (error) {
		next(error);
	}
};

const show = async (req, res) => {
	try {
		const result = await Service.find({ _id: req.params.id });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const addService = new Service(req.body);
		const result = await addService.save();
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const result = await Service.findByIdAndUpdate(
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
		const result = await Service.findByIdAndDelete({ _id: req.params.id });
		if (result) {
			return res.json({ msg: 'Service have deleted' });
		} else {
			// return res.status(404).json({msg: 'Service not found'})
			throw new Error('Service not found');
		}
	} catch (error) {
		next(error);
	}
};

module.exports = { index, show, create, update, destroy };
