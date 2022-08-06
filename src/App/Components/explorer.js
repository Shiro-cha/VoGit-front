import  React , {useState,useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Home from '@mui/icons-material/Home';
import Computer from '@mui/icons-material/Computer';
import History from '@mui/icons-material/History';
import Logout from '@mui/icons-material/Logout';
import Upload from '@mui/icons-material/Upload';
import Cyclone from '@mui/icons-material/Cyclone';
import Download from '@mui/icons-material/Download';

//components pages

import FileContainer from "./components/FileContainer"
import HistoryContainer from "./components/HistoryContainer"

//style 

import "../css/login.css"
 
const actions = [
{ icon: <Download />, name: 'New Download' },
{ icon: <Upload />, name: 'New upload' },
{ icon: <Cyclone />, name: 'New container' },
{ icon: <History />, name: 'New history' },
];

export default function Explorer() {
	
	//ref to set active style
	let home = useRef(null)
	let history = useRef(null)
	let hostDistant = useRef(null)
	const [activeElement,setActiveElement] = useState(home)
	
	//state to set right component
	const [rightComponent,setRightComponent] = useState(<FileContainer />)
	
	function changeActive(elt, prevElt,setPrevelt){
		let newelt = elt.current
		let prev = prevElt.current 
		prev.classList.remove("active")
		newelt.classList.add("active")
		setPrevelt(elt)
	}
	
	return (
		<div style={{position:"fixed",top:0,bottom:0,left:0,right:0}}>
		<Grid container sx={{height:"100%"}}>
		<AppBar position="fixed" sx={{opacity:"0.91",background:"#D51062",color:"#1565c0",borderRadius:"5px",width:"100%",margin:"0 auto",marginTop:"0px"}}>
		<Toolbar variant="dense">
		
		<Typography variant="h6" color="#ffffff" component="div" sx={{fontWeight:"bold",fontStyle:"italic",fontSize:"22px"}}>
		VoGit 
		</Typography>
		</Toolbar>
		</AppBar>
		<Grid item xs={2} sx={{height:"100%"}} className="shadow">
		 
		 <Stack
		 direction={{ xs: 'column', sm: 'column' }}
		 spacing={{ xs: 0.5, sm: 2, md: 4 }}
		 justifyContent="center"
		 alignItems="flex-start"
		 
		 sx={{height:"100%",padding:"5px"}}
		 >
		 <div className="list-item active" ref={home} onClick={(e)=>{changeActive(home,activeElement,setActiveElement);setRightComponent(<FileContainer />)}}><Home className="icon"/><span className="responsive-menu"> &nbsp;My Home</span></div>
		 <div className="list-item" ref={hostDistant} onClick={(e)=>{changeActive(hostDistant,activeElement,setActiveElement);setRightComponent(<FileContainer />)}}><Computer className="icon"/><span className="responsive-menu"> &nbsp;54.212.6.187</span></div>
		 <div className="list-item" ref={history} onClick={(e)=>{changeActive(history,activeElement,setActiveElement);setRightComponent(<HistoryContainer />)}}><History className="icon"/><span className="responsive-menu"> &nbsp;Histories</span></div>
		 <div className="list-item"><Logout className="icon"/><span className="responsive-menu"> &nbsp;Logout</span></div>
		 </Stack>
		
		</Grid>
		<Grid item xs={10} sx={{height:"100%",marginTop:"70px"}}>
		
		
		
		<Box sx={{ height:"100%", transform: 'translateZ(0px)', flexGrow: 1 ,justifyContent:"center"}}>
		
		{  
			//page component
			rightComponent
		}
		
		
		<SpeedDial
		ariaLabel="SpeedDial basic "
		sx={{ position: 'absolute',bottom: 116, right: 46 }}
		icon={<SpeedDialIcon/>}
		>
		{actions.map((action) => (
			<SpeedDialAction
			key={action.name}
			icon={action.icon}
			tooltipTitle={action.name}
			onClick={()=>{console.log(action.name)}}/>
		))} 
		</SpeedDial>
		</Box>
		
		</Grid>
		</Grid>
		
		
		</div>
	);
}
