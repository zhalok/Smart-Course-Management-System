import { useEffect, useState } from 'react';

export default function Profile({}) {
	const [teacherProfile, setTeacherProfile] = useState({});
	useEffect(async () => {
		const response = await fetch(
			'http://localhost:4000/teachers?id=${teacherId}'
		);
		const data = await response.json();
		console.log(data);
	}, []);

	return (
		<div>
			<div>Hello</div>
		</div>
	);
}

// export async function getServerSideProps(context) {
// 	const { req, res } = context;
// 	res.setHeader()
// }
