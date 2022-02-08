import Sidebar from '../../components/Layout/Sidebar';
import TeacherCard from '../../components/Cards/TeacherCard';

export default function Teachers({ data }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				padding: '50px',
			}}
		>
			<Sidebar />
			<div
				style={{
					width: '50%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '10px',
				}}
			>
				{data.map((e, index) => {
					return <TeacherCard info={e} key={index} />;
				})}
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const response = await fetch('http://localhost:3000/api/teachers?id=all');
	const data = await response.json();
	console.log(data);
	return {
		props: {
			data,
		},
	};
}
