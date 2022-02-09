import { useEffect, useState } from 'react';

export default function Contents({ ContentType }) {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	});
	return (
		<div
			style={{
				borderRadius: '10px',
				width: (windowWidth * 7) / 10,
				border: '1px solid black',
				padding: '20px',
				height: (windowHeight * 8) / 10,
				overflow: 'scroll',
				marginLeft: '10px',
			}}
		>
			Courses
		</div>
	);
}
