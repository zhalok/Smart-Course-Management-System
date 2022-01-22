const pg_client = require('../utils/create-dbclient');
const db_queries = require('../utils/db_queries');
const { v4: uuidv4 } = require('uuid');

const students = {};

students.add_new_student = (req, res, next) => {
	// res.json(uuid());
	v4();
};

students.get_all_students = (req, res, next) => {
	const query_string = 'select * from students';
	pg_client.query(query_string, (err, query_res) => {
		if (err) {
			next(err);
		} else {
			res.json(query_res.rows);
		}
	});
};

students.update_student = (req, res, next) => {};

students.delete_student = (req, res, next) => {};

module.exports = students;
