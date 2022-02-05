const { setCookies } = require('cookies-next');
const { pgClient } = require('../../../database/pg_client');
const { compare } = require('bcrypt');

export default async function authTeacher(req, res) {
	console.log(req.headers.cookie);
	const { email, password } = req.body;
	const query_string = `select * from teachers where email='${email}'`;
	try {
		const data = await pgClient.query(query_string);
		if (data.rows.length == 0) {
			res.status(401).json('unauthenticated');
		} else {
			const teacher = data.rows[0];
			const isAuthenticated = await compare(password, teacher.password);
		}
	} catch (e) {}
}
