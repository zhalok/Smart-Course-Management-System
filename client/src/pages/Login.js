import { Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BasicInfoContext from '../contexts/BasicInfoContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Login() {
	const [hoverButtonColor, setHoverButtonColor] = useState('');
	const theme = createTheme({
		typography: {
			fontFamily: 'Arial,Raleway,"Segoe UI"',
			fontSize: 20,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
		},
	});
	return (
		<div>
			<BasicInfoContext.Consumer>
				{({ isLoggedIn, currentUser, login_nav_info }) => {
					return (
						<Navbar
							isLoggedIn={isLoggedIn}
							currentUser={currentUser}
							login_nav_info={login_nav_info}
						/>
					);
				}}
			</BasicInfoContext.Consumer>

			<Paper
				elevation='5'
				style={{
					width: window.innerWidth / 3,
					marginLeft: 'auto',
					marginRight: 'auto',
					height: '400px',
					marginTop: '100px',
					borderRadius: '10px',
					padding: '20px',
					// position: 'absolute',
				}}
			>
				<div>
					<ThemeProvider theme={theme}>
						<Typography variant='h6' sx={{ fontFamily: '"Segoe UI"' }}>
							Login
						</Typography>
					</ThemeProvider>
					<TextField
						label='Username'
						variant='outlined'
						style={{ width: '80%', marginTop: '30px' }}
					/>
					<TextField
						label='Password'
						variant='outlined'
						type='password'
						style={{ width: '80%', marginTop: '30px' }}
					/>
				</div>
				<Button variant='contained' style={{ marginTop: '50px', width: '80%' }}>
					Log in
				</Button>
				<Button
					variant='outlined'
					style={{
						marginTop: '10px',
						width: '80%',
						backgroundColor: hoverButtonColor,
						color: 'black',
					}}
					onMouseOver={() => {
						setHoverButtonColor('#00695f');
					}}
					onMouseOut={() => {
						setHoverButtonColor('');
					}}
				>
					Sign up
				</Button>
			</Paper>
		</div>
	);
}
