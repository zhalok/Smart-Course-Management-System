import TeacherImageCard from './TeacherImageCard';

export default function TeacherCard({ info }) {
	return (
		<div className='card'>
			<TeacherImageCard />
			<div>
				<h3>{info.name}</h3>
				<h4>{info.institution}</h4>
			</div>
		</div>
	);
}
