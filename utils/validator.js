const { hash, hashSync } = require('bcrypt');

const validator = {};

validator.emailValidator = (email) => {
	const valid_emails = ['gmail', 'outlook', 'yahoo'];
	const arr = email.split('@');
	if (arr.length == 1) return false;
	else {
		if (valid_emails.indexOf(arr[1].split('.')[0]) != -1) return true;
		else return false;
	}
};

validator.passwordEncrypter = (password, callback) => {
	const salt_rounds = 1;
	hash(password, salt_rounds, (err, result) => {
		if (!err && result) callback(null, result);
		else callback(err);
	});
};

validator.passwordValidator = (passowrd) => {};

// validator.passwordEncrypter('hello');

module.exports = validator;
