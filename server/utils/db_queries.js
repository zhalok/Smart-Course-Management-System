const db_queries = {};
db_queries.create_student_table =
	'create table students( student_id int primary key not null,first_name varchar(50) not null,last_name varchar(50) not null,email varchar(50) not null,password varchar(50) not null)';
module.exports = db_queries;
