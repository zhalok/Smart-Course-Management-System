import { React, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LeftDrawer from './LeftDrawer';

export default function Navbar({ title, login_nav_info }) {
	console.log(login_nav_info);
	const [showDrawer, setShowDrawer] = useState(false);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<LeftDrawer show={showDrawer} setShow={setShowDrawer} />
				<Toolbar
					style={{
						backgroundColor: '#00695f',
					}}
				>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
						onClick={() => {
							setShowDrawer(true);
						}}
					>
						<MenuIcon />
					</IconButton>
					<div>{title}</div>
					<div style={{ width: 'fit-content', marginLeft: 'auto' }}>
						{login_nav_info.map((e, index) => (
							<Button color='inherit' startIcon={e.icon}>
								<Typography variant='subtitile1'>{e.title}</Typography>
							</Button>
						))}
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
