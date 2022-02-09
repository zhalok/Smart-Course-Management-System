import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/Layout/Sidebar';
import Contents from '../components/Layout/Contents';
import { Navbar } from 'react-bootstrap';

export default function Home() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'auto auto',
				gridColumnGap: '10px',
				padding: '20px',
			}}
		>
			<Sidebar />
			<Contents />
		</div>
	);
}
