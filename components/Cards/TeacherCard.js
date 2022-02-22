import TeacherImageCard from './TeacherImageCard';

export default function TeacherCard({ info }) {
	// console.log('hello');
	return (
		<div className='card'>
			<TeacherImageCard id={info.image_upload_id} />
			<div>
				<h3>{info.name}</h3>
				<h4>{info.institution}</h4>
			</div>
		</div>
	);
}
