import { useEffect, useState } from 'react';
import OutlineButton from '../Buttons/Outlined';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import CoPresentTwoToneIcon from '@mui/icons-material/CoPresentTwoTone';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import { useRouter } from 'next/router';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function StudentSidebar({ loggedInUser }) {
	const router = useRouter();
	return (
		<div className='sidebar'>
			<div
				className='sidebar-elements'
				style={{ marginTop: '100px' }}
				onClick={() => {
					router.push('/');
				}}
			>
				<button className='button'>Home</button>
			</div>
			<div
				className='sidebar-elements'
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/courses');
				}}
			>
				<button className='button'>Courses</button>
			</div>
			<div
				className='sidebar-elements'
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push('/teachers');
				}}
			>
				<button className='button'>Mentors</button>
			</div>
			<div
				className='sidebar-elements'
				style={{ marginTop: '10px' }}
				onClick={() => {
					router.push(`/profile/${loggedInUser.userId}`);
				}}
			>
				<button className='button'>Profile</button>
			</div>
			<div
				className='sidebar-elements'
				style={{ marginTop: '10px' }}
				onClick={() => {
					localStorage.removeItem('token');
					router.push('/');
				}}
			>
				<button className='button'>Logout</button>
			</div>
		</div>
	);
}
