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
// 	const { params, locales } = context;
// 	const { teacherId } = params;

// 	const response = await fetch(
// 		`http://localhost:4000/teachers?id=${teacherId}`
// 	);
// 	const data = await response.json();
// 	if (data.length == 0) {
// 		return {
// 			redirect: {
// 				destination: '/',
// 				permanent: false,
// 			},
// 		};
// 	} else
// 		return {
// 			props: {
// 				teacherProfile: data,
// 				teacherId,
// 			},
// 		};
// }
