import React from 'react';
import Navbar from '../components/Navbar';
import BasicInfoContext from '../contexts/BasicInfoContext';

export default function Courses() {
	return (
		<div>
			<BasicInfoContext.Consumer>
				{({ isLoggedIn, currentUser, login_nav_info }) => {
					return <Navbar login_nav_info title='Classroom' />;
				}}
			</BasicInfoContext.Consumer>
		</div>
	);
}
