const nextConnect = require('next-connect');
const multer = require('multer');
// require('./');
export const config = {
	api: {
		bodyParser: false,
	},
};

const upload = multer({
	storage: multer.diskStorage({
		destination: './uploads',
		filename: (req, file, cb) => {
			const arr = file.originalname.split('.');
			const ext = arr[arr.length - 1];
			const fileName = Date.now() + '.' + ext;

			cb(null, fileName);
		},
	}),
});

// const upload = multer();
const app = nextConnect();

app.use(upload.single('teacherImage'));

app.post((req, res) => {
	console.log(req.body);
	console.log(req.file);
	res.json({ imageUploadId: req.file.filename.split('.')[0] });
});

export default app;
