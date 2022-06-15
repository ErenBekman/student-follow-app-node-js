const Users = require('../models/Users');
const JWT = require('jsonwebtoken');
const {
	passwordToHash,
	generateAccessToken,
	generateRefreshToken,
} = require('../middleware/helper');

const index = async (req, res, next) => {
	try {
		const allUsers = await Users.find({});
		res.json(allUsers);
	} catch (error) {
		next(error);
	}
};

const show = async (req, res) => {
	try {
		const result = await Users.find({ _id: req.params.id });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const addUsers = new Users(req.body);
		const result = await addUsers.save();
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const result = await Users.findByIdAndUpdate(
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
		const result = await Users.findByIdAndDelete({ _id: req.params.id });
		if (result) {
			return res.json({ msg: 'Users have deleted' });
		} else {
			// return res.status(404).json({msg: 'Users not found'})
			throw new Error('Users not found');
		}
	} catch (error) {
		next(error);
	}
};

const register = async (req, res, next) => {
	console.log('req.body :>> ', req.body);
	try {
		const { username, email, password } = req.body;
		if (!(email && password && username)) {
			res.status(400).send('All input is required');
		}
		const oldUser = await Users.findOne({ email });
		if (oldUser) {
			return res.status(409).send('User Already Exist. Please Login');
		}
		let encryptedPassword = passwordToHash(password);
		const user = await Users.create({
			username,
			email: email.toLowerCase(),
			password: encryptedPassword,
		});
		console.log('req.body :>> ', user);
		const token = JWT.sign(
			{ user_id: user._id, email: user.email },
			'ÖğrenciTakip123!',
			{
				expiresIn: '2h',
			}
		);

		res.status(201).json({
			user: user,
			token: token,
		});
	} catch (err) {
		console.log(err);
	}
};
const login = async (req, res) => {
	console.log('req.body :>> ', req.body);
	req.body.password = passwordToHash(req.body.password);
	Users.findOne(req.body)
		.then((user) => {
			if (!user) return res.status(404).send({ message: 'User not found!' });

			user = {
				...user.toObject(), //mongodb deki butun kolonlari getirdigi icin
				tokens: {
					access_token: generateAccessToken(user),
					refresh_token: generateRefreshToken(user),
				},
			};
			res.status(200).send(user);
		})
		.catch((e) => {
			res.status(500).send(e);
		});
};

const logout = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	console.log('headers :>> ', req.headers['authorization']);
	JWT.sign(authHeader, '', { expiresIn: 1 }, (logout, err) => {
		if (logout) {
			res.status(200).send({ msg: 'You have been Logged Out' });
		} else {
			res.status(500).send(err);
		}
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	register,
	login,
	logout,
	destroy,
};
