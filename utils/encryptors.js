const { sign } = require('jsonwebtoken');
const { hash } = require('bcrypt');
const encryptor = {};

encryptor.passwordEncrypter = (password, callback) => {
	const salt_rounds = 1;
	hash(password, salt_rounds, (err, result) => {
		if (!err && result) callback(null, result);
		else callback(err);
	});
};

encryptor.tokenEncryptor = (payload, secretKey) => {
	const encryptedToken = sign(payload, secretKey, { algorithm: 'HS256' });
	return encryptedToken;
};

module.exports = encryptor;
