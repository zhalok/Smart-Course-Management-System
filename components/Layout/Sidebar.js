import { useEffect, useState } from 'react';
import OutlineButton from '../Buttons/Outlined';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import CoPresentTwoToneIcon from '@mui/icons-material/CoPresentTwoTone';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import { useRouter } from 'next/router';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Sidebar() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);

	const [loggedInUser, setLoggedInUser] = useState(null);

	const router = useRouter();

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
		const token = localStorage.getItem('token');
		if (!token) {
			setLoggedInUser(null);
			return;
		}

		fetch(`http://localhost:3000/api/auth/authorization?token=${token}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.authorized == true) {
					setLoggedInUser(data.info);
				} else {
					setLoggedInUser(null);
				}
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<div
			style={{
				height: windowHeight,
				border: '1px solid black',
				borderRadius: '10px',
			}}
		>
			<div
				style={{
					marginTop: '100px',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				<div
					style={{
						border: '1px solid black',
						padding: '20px',
						width: '60%',
						textAlign: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
					onClick={() => {
						router.push('/');
					}}
				>
					Home
				</div>
				<div
					style={{
						border: '1px solid black',
						padding: '20px',
						width: '60%',
						textAlign: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '10px',
					}}
					onClick={() => {
						router.push('/courses');
					}}
				>
					Courses
				</div>
				<div
					style={{
						border: '1px solid black',
						padding: '20px',
						width: '60%',
						textAlign: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '10px',
					}}
					onClick={() => {
						router.push('/teachers');
					}}
				>
					Mentors
				</div>
			</div>
		</div>
	);
}
