import TeacherCard from '../../components/Cards/TeacherCard';
export default function TeacherList({ teachers }) {
	return (
		<div
			style={{
				marginLeft: 'auto',
				marginRight: 'auto',
				width: '100%',
				border: '1px solid black',
			}}
		>
			{teachers.map((e, index) => {
				return (
					<div key={index}>
						<TeacherCard info={e} />
					</div>
				);
			})}
		</div>
	);
}
