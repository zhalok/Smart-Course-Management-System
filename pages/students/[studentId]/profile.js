export default function Profile({ profileData }) {
	if (profileData) {
		return (
			<>
				<div>{profileData.name}</div>
				<div>{profileData.username}</div>
				<div>{profileData.email}</div>
			</>
		);
	} else {
		return <div>Loading...</div>;
	}
	// return <div>{undefined.hello}</div>;
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(
		`http://localhost:4000/students/${params.studentId}`
	);
	const data = await response.json();
	return {
		props: {
			profileData: data,
		},
	};
}
