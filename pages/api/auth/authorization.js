const { tokenValidator } = require('../../../utils/validators');

export default function authorization(req, res) {
	const token = req.query.token;
	// console.log(token);
	if (token) {
		const payload = tokenValidator(token, process.env.SECRET_KEY);
		res.json({
			authorized: true,
			info: payload,
		});
	} else {
		res.json({
			authorized: false,
		});
	}
}
