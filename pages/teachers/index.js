import Sidebar from '../../components/Layout/Sidebar';
import TeacherCard from '../../components/Cards/TeacherCard';
import { useEffect, useState } from 'react';
import TeacherSidebar from '../../components/Layout/TeacherSidebar';

export default function Teachers({ data }) {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	});
	return (
		<div className='layout-grid'>
			<TeacherSidebar />
			<div
				className='content'
				style={{
					width: (windowWidth * 7) / 10,
					height: windowHeight,
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
