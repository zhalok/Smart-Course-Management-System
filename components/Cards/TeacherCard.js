import Image from 'next/image';
import img from '../../images/teacher.png';

const myLoader = ({ src, width, quality }) => {
	return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function TeacherCard({ info }) {
	return (
		<div className='card'>
			<Image src={img} height={500} width={500} />
			<div>
				<h3>{info.name}</h3>
				<h4>{info.institution}</h4>
			</div>
		</div>
	);
}
