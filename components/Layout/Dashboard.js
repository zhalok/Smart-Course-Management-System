import { useEffect, useState } from 'react';
export default function Dashboard() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	});
	return (
		<div
			className='dashboard'
			style={{
				height: windowHeight,
			}}
		>
			<h3>Dashboard</h3>
		</div>
	);
}
