const { tokenEncryptor } = require('./encryptors');

const data = {
	name: 'zhalok',
	age: '23',
};

const token = tokenEncryptor(data);

console.log(token);
