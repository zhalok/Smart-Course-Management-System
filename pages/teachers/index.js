import Sidebar from '../../components/Layout/Sidebar';
import TeacherCard from '../../components/Cards/TeacherCard';
import { useEffect, useState } from 'react';

export default function Teachers({ data }) {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	});
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '20% 80%',
				columnGap: '20px',
				padding: '40px',
			}}
		>
			<Sidebar />
			<div
				style={{
					borderRadius: '10px',
					width: (windowWidth * 7) / 10,
					border: '1px solid black',
					padding: '20px',
					height: windowHeight,
					overflowY: 'scroll',
				}}
			>
				<h3>Teachers</h3>
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
