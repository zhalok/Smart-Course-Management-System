import Button from '@mui/material/Button';
import { bgcolor } from '@mui/system';
import { defaultConfig } from 'next/dist/server/config-shared';
import { useState } from 'react';

export default function OutlinedButton({
	DefaultTextColor,
	HoverTextColor,
	DefaultBgColor,
	HoverBgColor,
	Icon,
	Text,
	Width,
}) {
	const [bgColor, setBgColor] = useState(DefaultBgColor);
	const [color, setColor] = useState(DefaultTextColor);

	return (
		<div style={{ width: Width, marginLeft: 'auto', marginRight: 'auto' }}>
			<Button
				variant='outlined'
				startIcon={Icon}
				style={{ backgroundColor: bgColor, color: color, width: '100%' }}
				onMouseOver={() => {
					setColor(HoverTextColor);
					setBgColor(HoverBgColor);
				}}
				onMouseOut={() => {
					setColor(DefaultTextColor);
					setBgColor(DefaultBgColor);
				}}
			>
				{Text}
			</Button>
		</div>
	);
}
