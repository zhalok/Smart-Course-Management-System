const Students = ({ students }) => {
	return (
		<div
			style={{
				width: 'fit-content',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '100px',
				border: '1px solid black',
				padding: '10px',
			}}
		>
			<div>
				{students.map((e, index) => (
					<div key={index}>{e.name}</div>
				))}
			</div>
		</div>
	);
};

const getStaticProps = async () => {
	const response = await fetch('http://localhost:4000/students');
	const data = await response.json();
	// console.log(data);
	return {
		props: {
			students: data,
		},
	};
};

export default Students;
export { getStaticProps };
