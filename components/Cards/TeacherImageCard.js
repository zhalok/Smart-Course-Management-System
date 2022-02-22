import Image from 'next/image';
import { useEffect, useState } from 'react';
import img from '../../images/teacher.png';
export default function TeacherImageCard() {
	const [image, setImage] = useState(img);
	// useEffect(()=>{
	//     fetch("")
	// },[])
	// retrive the image from the server storage
	return (
		<div>
			<Image src={image} height={500} width={500} />
		</div>
	);
}
