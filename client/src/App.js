import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import TeacherSignup from './pages/TeacherSIgnup';
import StudentSignup from './pages/StudentSignup';
import AdminLogin from './pages/AdminLogin';
import { useState, React } from 'react';
import BasicInfoContext from './contexts/BasicInfoContext';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FaceIcon from '@mui/icons-material/Face';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState('');
	const login_nav_info_while_not_logged_in = [
		{ title: 'login', icon: <LoginIcon /> },
		{ title: 'signup', icon: <HowToRegIcon /> },
	];
	const login_nav_info_while_logged_in = [
		{ title: 'Profile', link: '', icon: <FaceIcon /> },
		{ title: 'Logout', link: '', icon: <MeetingRoomIcon /> },
	];
	let login_nav_info;
	if (isLoggedIn == true) login_nav_info = login_nav_info_while_logged_in;
	else login_nav_info = login_nav_info_while_not_logged_in;
	return (
		<div className='App'>
			<BasicInfoContext.Provider
				value={{ isLoggedIn, currentUser, login_nav_info }}
			>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/courses' element={<Courses />} />
						<Route path='/login' element={<Login />} />
						<Route path='login/admin' element={<AdminLogin />} />
						<Route path='/signup/teacher' element={<TeacherSignup />} />
						<Route path='signup/student' element={<StudentSignup />} />
					</Routes>
				</Router>
			</BasicInfoContext.Provider>
		</div>
	);
}

export default App;
