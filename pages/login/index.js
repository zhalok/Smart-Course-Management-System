import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const auth = () => {
		fetch('http://localhost:3000/api/teachers/auth', {
			method: 'POST',
		});
	};
	return (
		<div>
			<div>
				<label>Email</label>
				<input></input>
				<label>password</label>
				<input></input>
				<button>submit</button>
			</div>
		</div>
	);
}
