const emailValidator = (email) => {
	const valid_emails = ['gmail', 'outlook', 'yahoo'];
	const arr = email.split('@');
	if (arr.length == 1) return false;
	else {
		if (valid_emails.indexOf(arr[1].split('.')[0]) != -1) return true;
		else return false;
	}
};

export default emailValidator;
