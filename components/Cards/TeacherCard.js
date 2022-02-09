import Image from 'next/image';
import img from '../../images/teacher.png';

const myLoader = ({ src, width, quality }) => {
	return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function TeacherCard({ info }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				padding: '20px',
				width: '100%%',
				border: '1px solid black',
				backgroundColor: '#D4F2FC',
				marginTop: '20px',
				marginLeft: 'auto',
				marginRight: 'auto',
				borderRadius: '10px',
			}}
		>
			<div
				style={{
					width: '100px',
					height: '100px',
				}}
			>
				<Image src={img} alt='hello' height={500} width={500} />
			</div>
			<div style={{ width: '50%', marginLeft: '50px' }}>
				<h4>Name: {info.name}</h4>
				<h5>Institution: {info.institution}</h5>
				<h5>Courses: {info.courses}</h5>
			</div>
		</div>
	);
}
