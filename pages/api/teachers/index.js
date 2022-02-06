const { pgClient } = require('../../../database/pg_client');
const uuid = require('uuid');
const { emailValidator } = require('../../../utils/validator');
const { passwordEncrypter } = require('../../../utils/encryptors');

const createNewTeacher = (req, res) => {
	// console.log(uuidv4());
	const id = Date.now();
	const { name, email, password, institution } = req.body;

	if (!emailValidator(email)) {
		res.status(500).json('Invalid Email');
		return;
	}

	passwordEncrypter(password, (err, encrypted_password) => {
		if (!err && encrypted_password) {
			const query_string = `insert into teachers (id, name,email,password,institution) values( '${id}' , '${name}','${email}','${encrypted_password}','${institution}');`;
			pgClient
				.query(query_string)
				.then((data) => {
					const new_entry = {
						id,
						name,
						email,
						encrypted_password,
						institution,
					};
					res.status(200).json(new_entry);
				})
				.catch((e) => {
					console.log(e);
					if (e.code == '23505') {
						res.status(500).json('EmailExists');
					} else {
						res.status(500).json('There was an unknown error');
					}
				});
		} else {
			res.status(500).json('there was an error');
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

const updateTeacherById = (req, res) => {
	const { id, field, value } = req.body;
	const query_string = `update teachers set ${field} = '${value}' where id=${id}`;
	pgClient
		.query(query_string)
		.then((data) => res.status(200).json('data updated'))
		.catch((e) => res.status(500).json('there was an error updating'));
};

const deleteTeacherById = (req, res) => {
	const { id } = req.query;
	const query_string = `delete from teachers where id=${id}`;
	pgClient
		.query(query_string)
		.then((data) => res.status(200).json('data deleted'))
		.catch((e) => res.status(500).json('there was a problem'));
};

const deleteAllTeachers = (req, res) => {
	pgClient
		.query('drop table teachers')
		.then(
			pgClient
				.query(
					'create table teachers(id varchar(500) primary key ,name varchar(50) not null ,email varchar(50) not null unique  ,password varchar(500)  not null ,institution varchar(100) not null );'
				)
				.then((data) => res.json('Teachers were deleted'))
				.catch((e) => console.log(e))
		)
		.catch((e) => console.log(e));
};

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
		updateTeacherById(req, res);
	} else if (method == 'DELETE') {
		const { id } = req.query;
		if (id == 'all' || !id) deleteAllTeachers(req, res);
		else deleteTeacherById(req, res);
	}
}
