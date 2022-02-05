const query_string_generator = {};

query_string_generator.create_teacher = (info) => {
	const { id, name, email, username, password, institution } = info;
	const query_string = `insert into teachers (id,name,email,username,password,institution) values(${id},${name},${email},${username},${password},${institution})`;
	return query_string;
};

module.exports = query_string_generator;
