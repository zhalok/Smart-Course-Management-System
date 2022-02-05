const { Client } = require('pg');
const pgClient = new Client({
	user: 'kaifa',
	host: 'localhost',
	database: 'mydb',
	password: 'hello',
});
pgClient.connect();
module.exports = { pgClient };
