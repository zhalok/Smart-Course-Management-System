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
import Sidebar from '../components/Layout/Sidebar';
import Contents from '../components/Layout/Contents';

export default function Home() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);

	const [loggedInUser, setLoggedInUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	});

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				padding: '50px',
			}}
		>
			<Sidebar />
			<Contents ContentType={'Courses'} />
		</div>
	);
}
