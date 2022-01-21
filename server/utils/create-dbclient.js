const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const credentials = {
	database: process.env.dbname,
	user: process.env.user,
	host: process.env.host,
	port: process.env.dbport,
	password: process.env.password,
};
const client = new pg.Client(credentials);
client.connect();
module.exports = client;
