import  React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
{ icon: <FileCopyIcon />, name: 'Copy' },
{ icon: <SaveIcon />, name: 'Save' },
{ icon: <PrintIcon />, name: 'Print' },
{ icon: <ShareIcon />, name: 'Share' },
];

export default function Explorer() {
	return (
		<div style={{position:"fixed",top:0,bottom:0,left:0,right:0}}>
		<Grid container>
		<Grid item xs=4>
		 
		 vertical navbar here
		
		</Grid>
		<Grid item xs=8>
		
		<Box sx={{ height:"100%", transform: 'translateZ(0px)', flexGrow: 1 }}>
		<SpeedDial
		ariaLabel="SpeedDial basic example"
		sx={{ position: 'absolute', bottom: 16, right: 16 }}
		icon={<SpeedDialIcon />}
		>
		{actions.map((action) => (
			<SpeedDialAction
			key={action.name}
			icon={action.icon}
			tooltipTitle={action.name}
			/>
		))}
		</SpeedDial>
		</Box>
		
		</Grid>
		</Grid>
		
		
		</div>
	);
}
