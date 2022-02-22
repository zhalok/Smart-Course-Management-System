import { useRouter } from 'next/router';
import Sidebar from '../../components/Layout/Sidebar';

export default function Signup() {
	const router = useRouter();
	return (
		<div className='layout-grid'>
			<Sidebar />
			<div
				style={{
					width: '80%',
					height: '100%',
					marginLeft: 'auto',
					marginRight: 'auto',

					padding: '20px',
					border: '2px solid black',
				}}
			>
				<div
					style={{
						marginLeft: 'auto',
						marginRight: 'auto',
						textAlign: 'center',
						border: '1px solid black',
						marginTop: '100px',
					}}
					onClick={() => {
						router.push('/signup/teacher');
					}}
				>
					<button className='button2'>Signup as a teacher</button>
				</div>
				<div
					style={{
						marginLeft: 'auto',
						marginRight: 'auto',

						textAlign: 'center',
						border: '1px solid black',
						marginTop: '20px',
					}}
					onClick={() => {
						router.push('/signup/student');
					}}
				>
					<button className='button2'>Signup as a student</button>
				</div>
			</div>
		</div>
	);
}
