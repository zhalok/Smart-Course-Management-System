import Image from 'next/image';
import { useEffect, useState } from 'react';
import img from '../../images/teacher.png';
export default function TeacherImageCard({ id }) {
	const [image, setImage] = useState(img);
	useEffect(() => {
		console.log('hello');
		fetch(`http://localhost:3000/api/images/download/teacher?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log('hello');
				setImage(data);
			})
			.catch((e) => console.log(e));
	}, []);
	useEffect(() => {
		console.log('hello');
		fetch(`http://localhost:3000/api/images/download/teacher?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log('hello');
				setImage(data);
			})
			.catch((e) => console.log(e));
	});
	// retrive the image from the server storage
	return (
		<div>
			<Image src={image} height={500} width={500} />
		</div>
	);
}
