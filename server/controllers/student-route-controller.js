const pg_client = require('../utils/create-dbclient');

const students = {};

students.add_new_student = (req, res, next) => {};

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
