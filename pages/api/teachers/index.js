const { pgClient } = require('../../../database/pg_client');
const { emailValidator } = require('../../../utils/validator');

const createNewTeacher = (req, res) => {
	const { name, email, password, institution } = req.body;

	if (!emailValidator(email)) {
		res.status(500).json('Invalid Email');
		return;
	}

	const query_string = `insert into teachers (name,email,password,institution) values('${name}','${email}','${password}','${institution}');`;

	pgClient
		.query(query_string)
		.then((data) => res.json('data inserted'))
		.catch((e) => {
			console.log(e);
			if (e.code == '23505') {
				res.status(500).json('EmailExists');
			} else {
				res.status(500).json('There was an unknown error');
			}
		});
};

const getAllTeachers = (req, res) => {
	pgClient
		.query('select * from teachers')
		.then((data) => res.json(data.rows))
		.catch((e) => console.log(e));
};

const getTeacherById = (req, res) => {
	const { id } = req.query;
	pgClient
		.query(`select * from teachers where id=${id}`)
		.then((data) => res.json(data.rows))
		.catch((e) => res.status(500).json('error'));
};

const updateTeacherById = (req, res) => {};

const deleteTeacherById = (req, res) => {};

const deleteAllTeachers = (req, res) => {
	pgClient
		.query('drop table teachers')
		.then(
			pgClient
				.query(
					'create table teachers(id serial primary key ,name varchar(50) not null ,email varchar(50) not null   ,password varchar(50)  not null ,institution varchar(100) not null );'
				)
				.then((data) => res.json('Teachers were deleted'))
				.catch((e) => console.log(e))
		)
		.catch((e) => console.log(e));
};

const authTeacher = (req, res) => {};

export default function handler(req, res) {
	const { method, query } = req;
	if (method == 'GET') {
		if (!query || query.id == 'all') {
			getAllTeachers(req, res);
		} else if (query.id) {
			getTeacherById(req, res);
		}
	} else if (method == 'POST') {
		createNewTeacher(req, res);
	} else if (method == 'PUT') {
	} else if (method == 'DELETE') {
	}
}
