const db_queries = {};
db_queries.create_student_table =
	'create table students( student_id int primary key not null,first_name varchar(50) not null,last_name varchar(50) not null,email varchar(50) not null,password varchar(50) not null)';

db_queries.get_whole_table = (table_name) => {
	return `select * from ${table_name}`;
};

db_queries.inser_student = (first_name, last_name, email, passowrd) => {
	return `insert into students(first_name,last_name,email,password) values(${first_name},${last_name},${email},${passowrd});`;
};
module.exports = db_queries;
