const { pgClient } = require('../../../database/pg_client');
const { compare } = require('bcrypt');
const { generateToken } = require('../../../utils/generators');
const { tokenValidator } = require('../../../utils/validators');

export default async function authTeacher(req, res) {
	if (req.cookies && req.cookies.token) {
		const encrypted_token = req.cookies.token;
		const decrypted_token = tokenValidator(
			encrypted_token,
			process.env.SECRET_KEY
		);

		res.status(200).json(decrypted_token);
		return;
	}

	const { email, password } = req.body;
	const query_string = `select * from teachers where email='${email}'`;
	try {
		const data = await pgClient.query(query_string);
		if (data.rows.length == 0) {
			res.status(401).json('unauthenticated');
		} else {
			const teacher = data.rows[0];
			const isAuthenticated = await compare(password, teacher.password);
			if (isAuthenticated == true) {
				const tokenPayload = {
					userId: teacher.id,
					role: 'teacher',
				};
				const encryptedToken = generateToken(
					tokenPayload,
					process.env.SECRET_KEY
				);
				res.setHeader('set-Cookie', [`token=${encryptedToken}`]);
				res.status(200).json(tokenPayload);
			} else {
				res.status(401).json({ message: 'unauthenticated' });
			}
		}
	} catch (e) {}
}
