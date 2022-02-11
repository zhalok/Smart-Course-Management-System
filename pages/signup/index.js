import { useRouter } from 'next/router';

export default function Signup() {
	const router = useRouter();
	return (
		<div
			style={{
				width: '40%',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '100px',
				padding: '20px',
				border: '2px solid black',
			}}
		>
			<div
				style={{
					width: '70%',
					marginLeft: 'auto',
					marginRight: 'auto',
					textAlign: 'center',
					border: '1px solid black',
				}}
				onClick={() => {
					router.push('/signup/teacher');
				}}
			>
				<button className='button2'>Signup as a teacher</button>
			</div>
			<div
				style={{
					width: '70%',
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
	);
}
