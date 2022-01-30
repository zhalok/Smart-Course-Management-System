import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	}, []);

	return (
		<div style={{ display: 'flex', flexDirection: 'row', padding: '50px' }}>
			<div
				style={{
					width: (windowWidth * 2) / 10,
					border: '1px solid black',
					padding: '20px',
					height: (windowHeight * 8) / 10,
				}}
			></div>
			<div
				style={{
					width: (windowWidth * 5) / 10,
					border: '1px solid black',
					padding: '20px',
					height: (windowHeight * 8) / 10,
					overflow: 'scroll',
				}}
			>
				Courses
			</div>
			<div
				style={{
					width: (windowWidth * 2) / 10,
					border: '1px solid black',
					padding: '20px',
				}}
			>
				FAQs
			</div>
		</div>
	);
}
