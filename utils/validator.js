const { hash, compare } = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

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

validator.passwordValidator = (
	given_password,
	encrypted_password,
	callback
) => {
	compare(given_password, encrypted_password, (err, result) => {
		if (!err && result) callback(null, result);
		else callback(null);
	});
};

validator.tokenValidator = () => {
	console.log(jsonwebtoken);
};

// validator.passwordEncrypter('hello');

module.exports = validator;
