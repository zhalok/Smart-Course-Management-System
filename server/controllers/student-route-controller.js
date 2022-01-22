const pg_client = require('../utils/create-dbclient');
const db_queries = require('../utils/db_queries');
const uuid4 = require('uuidv4');

const students = {};

students.add_new_student = (req, res, next) => {
	const { first_name,last_name, }
	pg_client.query('select * from students', (err, data) => {
		if (err) {
			if (err.code === '42P01') {
				pg_client.query(db_queries.create_student_table, (err, data) => {
					if (err) {
						next(err);
					} else {
						res.json(data.rows);
					}
				});
			}
		} else {
			res.json(data.rows);
		}
	});
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
