import React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import DescriptionIcon from '@mui/icons-material/Description';

export default function LeftDrawer({ show, setShow }) {
	const list_of_options = [
		{ title: 'Courses', link: '', icon: <BookIcon /> },
		{ title: 'Classes', link: '', icon: <SchoolIcon /> },
		{ title: 'Instructors', link: '', icon: <CoPresentIcon /> },
		{ title: 'Study Materials', link: '', icon: <DescriptionIcon /> },
	];
	return (
		<div>
			<Drawer
				anchor={'left'}
				open={show}
				onClose={() => {
					setShow(false);
				}}
			>
				<div style={{ marginTop: '50px' }}>
					<List>
						{list_of_options.map((e, index) => {
							return (
								<ListItem button key={index}>
									<ListItemIcon>{e.icon}</ListItemIcon>
									<ListItemText>{e.title}</ListItemText>
								</ListItem>
							);
						})}
					</List>
				</div>
			</Drawer>
		</div>
	);
}
