const { sign } = require('jsonwebtoken');

const encryptor = {};

encryptor.passwordEncrypter = (password, callback) => {
	const salt_rounds = 1;
	hash(password, salt_rounds, (err, result) => {
		if (!err && result) callback(null, result);
		else callback(err);
	});
};

encryptor.tokenEncryptor = (payload) => {
	const secretKey = process.env.SECRET_KEY;
	const token = sign(payload, secretKey, { algorithm: 'HS256' });
	return token;
};

module.exports = encryptor;
