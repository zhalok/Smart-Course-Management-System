const express = require('express');
const dotenv = require('dotenv');
const student_route = require('./routes/student-route');
const app = express();
dotenv.config();

// console.log(client);

app.all('/', (req, res, next) => {
	res.json('hello client');
});

app.use('/students', student_route);

app.use((err, req, res, next) => {
	console.log(err);
});

app.listen(process.env.PORT, () => {
	console.log('server running');
});
