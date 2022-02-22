import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import emailValidator from '../../utils/client_side_validators/emailValidator';
import Sidebar from '../../components/Layout/Sidebar';

export default function Login() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const auth = () => {
		if (!emailValidator(email)) {
			alert('Please give a correct email');
			return;
		}

		fetch('http://localhost:3000/api/auth/authentification', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem('token', data.token);
				router.push('/');
			})
			.catch((e) => {
				alert('You are unauthenticated');
				setEmail('');
				setPassword('');
			});
	};

	return (
		<div className='layout-grid'>
			<Sidebar />
			<div
				style={{
					width: '80%',
					marginLeft: 'auto',
					marginRight: 'auto',

					padding: '30px',
					border: '1px solid black',
					borderRadius: '10px',
				}}
			>
				<div>
					<h1>Login</h1>
				</div>
				<div
					style={{
						display: 'grid',
						gridTemplateAreas: 'auto',
						rowGap: '10px',
						marginTop: '50px',
					}}
				>
					<div>
						<TextField
							fullWidth
							value={email}
							label='Email'
							type='email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							sx={{ backgroundColor: 'whitesmoke' }}
						/>
					</div>
					<div>
						<TextField
							fullWidth
							value={password}
							label='Password'
							type='password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							sx={{ backgroundColor: 'whitesmoke' }}
						/>
					</div>
					<div
						style={{
							display: 'grid',
							gridTemplateAreas: 'auto',
							rowGap: '10px',
							marginTop: '20px',
						}}
					>
						<div>
							<Button
								variant='contained'
								fullWidth
								onClick={() => {
									auth();
								}}
							>
								Login
							</Button>
						</div>
						<div>
							<Button
								variant='contained'
								fullWidth
								color='success'
								onClick={() => {
									router.push('/signup');
								}}
							>
								Signup
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
