const JWT = require('jsonwebtoken');
const Users = require('../models/Users');

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	// const token = req.headers?.authorization?.split(" ")[1] || null
	if (token === null) {
		return res.status(404).send({ error: 'please first you have to login' });
	}

	JWT.verify(token, 'ÖğrenciTakip123!', async (err, user) => {
		if (err) return res.status(500).send({ error: err });
		console.log('user :>> ', user);
		req.user = await Users.findById(user._id);
		next();
	});
};

module.exports = authenticateToken;
