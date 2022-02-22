const { pgClient } = require('../../../../database/pg_client');
export default function handler(req, res) {
	const { id } = req.query;
	// console.log(pgClient);
	pgClient
		.query(`select * from teachers where id='${id}'`)
		.then((data) => {
			res.json(data.rows);
		})
		.catch((e) => console.log(e));
}
