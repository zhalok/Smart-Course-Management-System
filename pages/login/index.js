import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const auth = () => {
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
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.verified == true) {
					localStorage.setItem('token', data.token);
					router.push('/');
				}
			})
			.catch((e) => console.log(e));
	};

	return (
		<div>
			<div>
				<label>Email</label>
				<input
					type='email'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<br />
				<label>password</label>

				<input
					type='password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<br />
				<button
					onClick={() => {
						auth();
					}}
				>
					submit
				</button>
			</div>
		</div>
	);
}
