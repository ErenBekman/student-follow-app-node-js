const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');

const passwordToHash = (password) => {
	return CryptoJS.HmacSHA256(
		password,
		CryptoJS.HmacSHA1(password, 'ÖğrenciTakip123!').toString()
	).toString();
};

const generateAccessToken = (user) => {
	return JWT.sign(
		{ name: user.username, ...user },
		'fa62003cd6f88bd23f345d88e6f0783abb5992b4832c63821b8eeb34bc1875d8',
		{ expiresIn: '1w' }
	);
	//db da name olsaydi buna gerek yoktu
};

const generateRefreshToken = (user) => {
	return JWT.sign(
		{ name: user.username, ...user },
		'fa62003cd6f88bd23f345d88e6f0783abb5992b4832c63821b8eeb34bc1875d8'
	);
};

module.exports = { passwordToHash, generateAccessToken, generateRefreshToken };
