const { tokenEncryptor } = require('./encryptors');

const generator = {};

generator.generateToken = (data, secretKey) => {
	return tokenEncryptor(data, secretKey);
};

module.exports = generator;
