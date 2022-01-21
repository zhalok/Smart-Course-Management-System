import React from 'react';
import Navbar from '../components/Navbar';
import BasicInfoContext from '../contexts/BasicInfoContext';

export default function Home() {
	return (
		<div>
			<BasicInfoContext.Consumer>
				{({ isLoggedIn, CurrentUser, login_nav_info }) => {
					return <Navbar login_nav_info={login_nav_info} title='Home' />;
				}}
			</BasicInfoContext.Consumer>
		</div>
	);
}
