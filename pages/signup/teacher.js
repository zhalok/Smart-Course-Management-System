import { Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import emailValidator from '../../utils/client_side_validators/emailValidator';
export default function TeacherSignup() {
	const Input = styled('input')({
		display: 'none',
	});

	const [fullName, setFullName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmedPassword, setConfirmedPassword] = useState('');
	const [email, setEmail] = useState('');
	const [institution, setInstitution] = useState('');
	const [image, setImage] = useState(null);

	const uploadImage = async () => {
		const formData = new FormData();
		formData.append('teacherImage', image);
		const response = await fetch(
			'http://localhost:3000/api/imageUpload/teacher',
			{
				method: 'POST',
				body: formData,
			}
		);
		const data = await response.json();
		const { imageUploadId } = data;
		console.log(imageUploadId);
		return imageUploadId;
	};

	const submitInfo = async () => {
		if (emailValidator(email) == false) {
			alert('Please provide a correct email');
			setEmail('');
			return;
		}

		if (
			fullName.length == 0 ||
			password.length == 0 ||
			email.length == 0 ||
			institution.length == 0
		) {
			alert('Please provide all the informations');
			return;
		}

		if (password != confirmedPassword) {
			alert('password did not match');
			return;
		}

		try {
			const imageUploadId = await uploadImage();
			console.log(imageUploadId);
			const response = await fetch('http://localhost:3000/api/teachers', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					name: fullName,
					password,
					email,
					institution,
					imageUploadId,
				}),
			});
			const data = await response.json();
			alert(
				'Your information is collected successfully \n soon you will be asked for an interview \n thanks a lot '
			);
			setFullName('');
			setEmail('');
			setPassword('');
			setConfirmedPassword('');
			setImage(null);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className='layout-grid'>
			<Sidebar />
			<div
				style={{
					width: '80%',
					marginLeft: 'auto',
					marginRight: 'auto',
					border: '2px solid black ',
					padding: '20px',
				}}
			>
				<h1 style={{ textAlign: 'center' }}> Signup as teacher </h1>
				<div
					className='text-fields-container'
					style={{
						marginTop: '50px',
					}}
				>
					<input
						className='text-fields'
						placeholder='Full Name'
						value={fullName}
						onChange={(e) => {
							setFullName(e.target.value);
						}}
					/>
				</div>
				<div className='text-fields-container'>
					<input
						className='text-fields'
						placeholder='Email'
						type='email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className='text-fields-container'>
					<input
						className='text-fields'
						placeholder='Password'
						type='password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className='text-fields-container'>
					<input
						className='text-fields'
						placeholder='Confirm Password'
						type='password'
						value={confirmedPassword}
						onChange={(e) => {
							setConfirmedPassword(e.target.value);
						}}
					/>
				</div>
				<div className='text-fields-container'>
					<input
						className='text-fields'
						placeholder='Institution'
						type='text'
						value={institution}
						onChange={(e) => {
							setInstitution(e.target.value);
						}}
					/>
				</div>
				<div className='text-fields-container' style={{ marginTop: '20px' }}>
					<label htmlFor='contained-button-file'>
						<Input
							accept='image/*'
							id='contained-button-file'
							type='file'
							formEncType='multipart/form-data'
							// value={image}
							onChange={(e) => {
								if (e.target.files && e.target.files[0]) {
									setImage(e.target.files[0]);
								}
							}}
						/>

						<div>
							<Button variant='contained' component='span' fullWidth>
								Upload Image
							</Button>
						</div>
					</label>
				</div>
				<div className='text-fields-container'>
					<div
						style={{
							marginTop: '10px',
							marginBottom: '10px',
						}}
					>
						<Button
							variant='contained'
							component='span'
							fullWidth
							color='success'
							onClick={() => {
								submitInfo();
							}}
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
