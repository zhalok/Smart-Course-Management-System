const nextConnect = require('next-connect');

const app = nextConnect();
app.get((req, res) => {
	const { id } = req.query;
	res.sendFile(
		'/home/zhalok/Desktop/Codes/js/NEXT_project/Smart-Course-Management-System/uploads/1645561642081.jpg'
	);
});

export default app;
