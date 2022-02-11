import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TeacherSidebar from './TeacherSidebar';
import StudentSidebar from './StudentSidebar';

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

	// console.log(loggedInUser);
	if (loggedInUser && loggedInUser.role == 'teacher')
		return <TeacherSidebar loggedInUser={loggedInUser} />;
	if (loggedInUser && loggedInUser.role == 'student')
		return <StudentSidebar loggedInUser={loggedInUser} />;

	return (
		<div className='sidebar'>
			<div
				className='sidebar-elements'
				style={{ marginTop: '100px' }}
				onClick={() => {
					router.push('/');
				}}
			>
				Home
			</div>
			<div
				className='sidebar-elements'
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/courses');
				}}
			>
				Courses
			</div>
			<div
				className='sidebar-elements'
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/teachers');
				}}
			>
				Mentors
			</div>
			<div
				className='sidebar-elements'
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/login');
				}}
			>
				Log in
			</div>
			<div
				className='sidebar-elements'
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/signup');
				}}
			>
				Sign up
			</div>
		</div>
	);
}
