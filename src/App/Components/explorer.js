import  React , {useState,useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import Alert from '@mui/material/Alert'; 
import Input from '@mui/material/Input';
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Snackbar from "@mui/material/Snackbar"
import Stack from '@mui/material/Stack';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import Home from '@mui/icons-material/Home';
import Computer from '@mui/icons-material/Computer';
import History from '@mui/icons-material/History';
import Logout from '@mui/icons-material/Logout';
import Upload from '@mui/icons-material/Upload';
import Cyclone from '@mui/icons-material/Cyclone';
import Download from '@mui/icons-material/Download';
import CloudDownload from '@mui/icons-material/CloudDownload';

// axiossss

import axios from "axios"

//baseURL configuration
import baseURL from "../config/baseURL"


// next page here
import Login from "./login"
//components pages

import FileContainer from "./components/FileContainer"
import HistoryContainer from "./components/HistoryContainer"

//style 

import "../css/login.css"
 
const actions = [
{ icon: <Download />, name: 'New Download' },
{ icon: <Upload />, name: 'New upload' },
{ icon: <Cyclone />, name: 'New container' },
];

export default function Explorer({remote,setPageComponent}) {
	
	//clientInformation
	
	const [hostname,setHostname] = useState(remote.host.hostname)
	const [username,setUsername] = useState(remote.host.username)
	const [homePath,setHomePath] = useState(remote.path.home)
	const [headFolder,setHeadFolder] = useState(remote.path.home)
	const [sep,setSep] = useState(remote.path.sep)
	//create api 
	let api = axios.create(baseURL)
	
	//ref to set active style
	let home = useRef(null)
	let history = useRef(null)
	let hostDistant = useRef(null)
	const [activeElement,setActiveElement] = useState(home)
	
	//action 
	const [openAction,setOpenAction] = useState(false)
	const [actionName,setActionName] = useState("No action")
	const [whichAction,setwhichAction] = useState(false)
	//message
	const [message,setMessage] = useState("")
	const [messageValid,setMessageValid] = useState(false)
	
	//state to set right component
	const [rightComponent,setRightComponent] = useState(<FileContainer homePath={homePath} sep={sep} headFolder={headFolder} setHeadFolder={setHeadFolder} host={"localhost"}/>)
	
	//logout handeler confimation
	
	const [openLogout,setOpenLogout] = useState(false)
	const [logoutError,setlogoutError] = useState(false)
	
	
	
	
	function changeActive(elt, prevElt,setPrevelt){
		let newelt = elt.current
		let prev = prevElt.current 
		prev.classList.remove("active")
		newelt.classList.add("active")
		setPrevelt(elt)
	}

	
	//logout function
	
	function logout(){
		api.post("/connect/logout").then(function(res){
			setlogoutError(false)
			if(res.data.isSuccess){
				setPageComponent(<Login setPageComponent={setPageComponent}/>)		
			}else{
				console.log("Error")
				setlogoutError(true)
			}
		}).catch(function(err){
			if(err) throw err
			console.log("Error...")
			setlogoutError(true)
		})
		
	}
	
	
	

	
	
	return (
		<div style={{position:"fixed",top:0,bottom:0,left:0,right:0}}>
		<Grid container sx={{height:"100%"}}>
		<AppBar position="fixed" sx={{opacity:"0.91",background:"#D51062",color:"#1565c0",borderRadius:"5px",width:"100%",margin:"0 auto",marginTop:"0px"}}>
		<Toolbar variant="dense" sx={{display:"flex",justifyContent:"space-between"}}>
		
		<Typography variant="h6" color="#ffffff" component="div" sx={{fontWeight:"bold",fontStyle:"italic",fontSize:"22px"}}>
		VoGit 
		</Typography>
		
		<IconButton
		size="large"
		aria-label="show 17 new notifications"
		color="inherit"
		>
		<Badge badgeContent={17} color="error">
		<CloudDownload sx={{color:"#ffffff"}} />
		</Badge>
		</IconButton>
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
		 <div className="list-item active" ref={home} onClick={(e)=>{changeActive(home,activeElement,setActiveElement);setRightComponent(<FileContainer homePath={''} sep={sep} headFolder={headFolder}  setHeadFolder={setHeadFolder} host={"localhost"}/>)}}><Home className="icon"/><span className="responsive-menu"> <Typography sx={{ fontWeight: 500 ,display:"inline"}}>&nbsp;My Home</Typography></span></div>
		 <div className="list-item" ref={hostDistant} onClick={(e)=>{changeActive(hostDistant,activeElement,setActiveElement);setRightComponent(<FileContainer homePath={homePath} sep={sep} headFolder={headFolder} setHeadFolder={setHeadFolder} host={hostname}/>)}}><Computer className="icon"/><span className="responsive-menu"><Typography sx={{ fontWeight: 500 ,display:"inline"}}> &nbsp;{hostname}</Typography></span></div>
		 <div className="list-item" ref={history} onClick={(e)=>{changeActive(history,activeElement,setActiveElement);setRightComponent(<HistoryContainer />)}}><History className="icon"/><span className="responsive-menu"> <Typography sx={{ fontWeight: 500 ,display:"inline"}}> &nbsp;Histories</Typography ></span></div>
		 <div className="list-item" onClick={()=>{setOpenLogout(true)}}><Logout className="icon"/><span className="responsive-menu"><Typography sx={{ fontWeight: 500 ,display:"inline"}}> &nbsp;Logout</Typography></span></div>
		 </Stack>
		 
		</Grid>
		<Grid item xs={10} sx={{height:"100%",marginTop:"70px"}}>
		
		
		
		<Box sx={{ height:"100%", transform: 'translateZ(0px)', flexGrow: 1 ,justifyContent:"center"}}>
		
		{  
			//page component
			rightComponent
		}
		
		
		
		</Box>
		
		</Grid>
		</Grid>
		
		{
			//Logout confirmation dialog
			
		}
		<Dialog 
		open={openLogout}
		keepMounted
		>
		<DialogTitle>{`Do you really want to logout ?`}</DialogTitle>
		<DialogActions>
		<Button sx={{color:"#D51062"}} onClick={()=>{setOpenLogout(false);setlogoutError(false)}}>Cancel</Button>
		<Button sx={{color:"#D51062"}} onClick={()=>{logout()}}>Logout</Button>
		</DialogActions>
		</Dialog>
		<Snackbar open={logoutError}
		anchorOrigin={{
			vertical:"bottom",
		 horizontal:"center"
		}}
		key={"buttom","center"}>
		<Alert severity="error">
		{`Logout error`}
		</Alert>
		</Snackbar>
		
		</div>
	);
}
