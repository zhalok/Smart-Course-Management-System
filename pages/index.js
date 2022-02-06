import Link from 'next/link';
import { useEffect, useState } from 'react';
import OutlineButton from '../components/Buttons/Outlined';
import ExploreIcon from '@mui/icons-material/Explore';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import CoPresentTwoToneIcon from '@mui/icons-material/CoPresentTwoTone';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
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
			<Link href={`/profile/${loggedInUser}`}>
				<div>Profile</div>
			</Link>
			<Button
				onClick={() => {
					localStorage.removeItem('token');
					setLoggedInUser(null);
					router.push('/');
				}}
			>
				Log out
			</Button>
		</div>
	);

	const loggedOutComponent = (
		<div>
			<Link href={'/login'}>
				<div>Login</div>
			</Link>
			<Link href={'/signup'}>
				<div>Signup</div>
			</Link>
		</div>
	);

	return (
		<div style={{ display: 'flex', flexDirection: 'row', padding: '50px' }}>
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
				<div style={{ marginTop: '50px' }}>
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
				<div style={{ marginTop: '10px' }}>
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
				<div style={{ marginTop: '10px' }}>
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
				<div style={{ marginTop: '10px' }}>
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
			<div
				style={{
					borderRadius: '10px',
					width: (windowWidth * 5) / 10,
					border: '1px solid black',
					padding: '20px',
					height: (windowHeight * 8) / 10,
					overflow: 'scroll',
					marginLeft: '10px',
				}}
			>
				Courses
			</div>
			<div
				style={{
					borderRadius: '10px',
					width: (windowWidth * 2) / 10,
					border: '1px solid black',
					padding: '20px',
					marginLeft: '10px',
				}}
			>
				FAQs
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {
			something: '',
		},
	};
}
