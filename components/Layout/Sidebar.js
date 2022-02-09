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
					setLoggedInUser(data.info.userId);
				} else {
					setLoggedInUser(null);
				}
			})
			.catch((e) => console.log(e));
	}, []);

	const loggedInComponent = (
		<div>
			<div
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push(`/profile/${loggedInUser}`);
				}}
			>
				<OutlineButton
					DefaultBgColor='white'
					HoverBgColor='#2940ea'
					DefaultTextColor='black'
					HoverTextColor='white'
					Text='Profile'
					Width='80%'
					Icon={<MapsHomeWorkIcon />}
				/>
			</div>

			<div
				style={{ marginTop: '10px' }}
				onClick={() => {
					localStorage.removeItem('token');
					setLoggedInUser(null);
					router.push(`/`);
				}}
			>
				<OutlineButton
					DefaultBgColor='white'
					HoverBgColor='#2940ea'
					DefaultTextColor='black'
					HoverTextColor='white'
					Text='Logout'
					Width='80%'
					Icon={<MapsHomeWorkIcon />}
				/>
			</div>
		</div>
	);

	const loggedOutComponent = (
		<div>
			<div
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/login');
				}}
			>
				<OutlineButton
					DefaultBgColor='white'
					HoverBgColor='#2940ea'
					DefaultTextColor='black'
					HoverTextColor='white'
					Text='Login'
					Width='80%'
					Icon={<LoginIcon />}
				/>
			</div>
			<div
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/signup');
				}}
			>
				<OutlineButton
					DefaultBgColor='white'
					HoverBgColor='#2940ea'
					DefaultTextColor='black'
					HoverTextColor='white'
					Text='Signup'
					Width='80%'
					Icon={<VpnKeyIcon />}
				/>
			</div>
		</div>
	);

	return (
		<div
			style={{
				borderRadius: '10px',
				width: (windowWidth * 2) / 10,
				border: '1px solid black',
				padding: '20px',
				height: (windowHeight * 8) / 10,
				flexDirection: 'column',
			}}
		>
			<div
				style={{ marginTop: '50px' }}
				onClick={() => {
					router.push('/');
				}}
			>
				<OutlineButton
					DefaultBgColor='white'
					HoverBgColor='#2940ea'
					DefaultTextColor='black'
					HoverTextColor='white'
					Text='Home'
					Width='80%'
					Icon={<MapsHomeWorkIcon />}
				/>
			</div>
			<div
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/courses');
				}}
			>
				<OutlineButton
					DefaultBgColor='white'
					HoverBgColor='#2940ea'
					DefaultTextColor='black'
					HoverTextColor='white'
					Text='Courses'
					Width='80%'
					Icon={<ClassTwoToneIcon />}
				/>
			</div>
			<div
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/teachers');
				}}
			>
				<OutlineButton
					DefaultBgColor='white'
					HoverBgColor='#2940ea'
					DefaultTextColor='black'
					HoverTextColor='white'
					Text='Mentors'
					Width='80%'
					Icon={<CoPresentTwoToneIcon />}
				/>
			</div>
			<div
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/students');
				}}
			>
				<OutlineButton
					DefaultBgColor='white'
					HoverBgColor='#2940ea'
					DefaultTextColor='black'
					HoverTextColor='white'
					Text='Students'
					Width='80%'
					Icon={<PeopleTwoToneIcon />}
				/>
			</div>
			<div>{loggedInUser ? loggedInComponent : loggedOutComponent}</div>
		</div>
	);
}
