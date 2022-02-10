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
			style={{
				border: '1px solid black',
				borderRadius: '10px',
				height: windowHeight,
				padding: '20px',
			}}
		>
			<h3>Dashboard</h3>
		</div>
	);
}
