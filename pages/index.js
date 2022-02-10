import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/Layout/Sidebar';
import Contents from '../components/Layout/Contents';
import { Navbar } from 'react-bootstrap';
import Dashboard from '../components/Layout/Dashboard';

export default function Home() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '20% 80% ',
				columnGap: '20px',
				padding: '40px',
				width: '100%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<div style={{}}>
				<Sidebar />
			</div>
			<div>
				<Dashboard />
			</div>
		</div>
	);
}
