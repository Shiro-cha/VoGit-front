import  React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';


//style

import "../css/login.css"

const actions = [
{ icon: <FileCopyIcon />, name: 'Copy' },
{ icon: <SaveIcon />, name: 'Save' },
{ icon: <PrintIcon />, name: 'Print' },
{ icon: <ShareIcon />, name: 'Share' },
];

export default function Explorer() {
	return (
		<div style={{position:"fixed",top:0,bottom:0,left:0,right:0}}>
		<Grid container sx={{height:"100%"}}>
		<Grid item xs={2} sx={{height:"100%"}} className="shadow">
		 
		 <Stack
		 direction={{ xs: 'row', sm: 'column' }}
		 spacing={{ xs: 0.5, sm: 2, md: 4 }}
		 sx={{height:"100%"}}
		 >
		 <div className="list-item">Item 1</div>
		 <div className="list-item">Item 2</div>
		 <div className="list-item">Item 3</div>
		 </Stack>
		
		</Grid>
		<Grid item xs={10} sx={{height:"100%"}}>
		
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
