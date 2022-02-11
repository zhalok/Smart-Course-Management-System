import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/Layout/Sidebar';
import Contents from '../components/Layout/Contents';
import { Navbar } from 'react-bootstrap';
import Dashboard from '../components/Layout/Dashboard';

export default function Home() {
	return (
		<div className='layout-grid'>
			<Sidebar />
			<Dashboard />
		</div>
	);
}
