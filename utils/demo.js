const { tokenEncryptor } = require('./encryptors');

const data = {
	name: 'zhalok',
	age: '23',
};

const token = tokenEncryptor(data, '123');

console.log(token);
