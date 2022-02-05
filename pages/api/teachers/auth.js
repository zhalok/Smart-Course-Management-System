const { setCookies } = require('cookies-next');
const { pgClient } = require('../../../database/pg_client');
const { passwordValidator } = require('../../../utils/validator');

export default function authTeacher(req, res) {
	const { email, password } = req.body;

	res.json('ok');
}
