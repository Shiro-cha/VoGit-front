import React , {useEffect,useState} from "react"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"
import Skeleton from "@mui/material/Skeleton" 
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import Snackbar from "@mui/material/Snackbar"
import Input from '@mui/material/Input';
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'
import Upload from '@mui/icons-material/Upload';
import Cyclone from '@mui/icons-material/Cyclone';
import Download from '@mui/icons-material/Download';

//component list component
import FileList from "./FileList"
import MyHeadEl from "./MyHead"

const actions = [
{ icon: <Download />, name: 'New Download' },
{ icon: <Upload />, name: 'New upload' },
{ icon: <Cyclone />, name: 'New container' },
];

export default function FileContainer({homePath ,sep ,host}){
	const [currentFolder,setCurrentFolder] = useState(homePath)
	const [myHead,setMyHead] = useState([])
	
	//action 
	const [openAction,setOpenAction] = useState(false)
	const [actionName,setActionName] = useState("No action")
	const [whichAction,setWhichAction] = useState(false)
	
	//message
	const [message,setMessage] = useState("")
	const [messageValid,setMessageValid] = useState(false)
	
	useEffect(()=>{
		if(currentFolder){
			console.log(currentFolder)
			setMyHead(currentFolder.split(sep))
		}
	},[currentFolder,openAction])  
	console.log(openAction)
	
	
	//actions function list
	
	function newDownload(){
		setOpenAction(true)
	}
	function newUpload(){
		setOpenAction(true)
	}
	function newContainer(){
		setOpenAction(true)
	}
	function newHistory(){
		setOpenAction(true)
	}
	
	//Choose action
	
	function handeleAction(action){
		setOpenAction(true)
		
		if(action){
			switch(action){
				case "New Download":
					setActionName("New Download")
					break
				case 'New upload':
					setActionName("New Upload")
					break
				case 'New container':
					setActionName("New Container")
					break
				case 'New history':
					setActionName("New History")
					break
			}
		}
	}
	
	//handleChangeMessage
	function handleChangeMessage(e){
		if(e.target.value){
			setMessageValid(true)
		}else{
			setMessageValid(false)
		}
		setMessage(e.target.value)
	}
	
	
	
	useEffect(()=>{
		console.log("action changed")
	},[openAction])
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container sx={{transform:"translate(0%,-50%) !important"}}>
		<MyHeadEl myHead={myHead} setCurrentFolder={setCurrentFolder} sep={sep} currentFolder={currentFolder}/>
		</Container>
		
		<FileList currentFolder={currentFolder} setCurrentFolder={setCurrentFolder}  sep={sep} host={host} homePath={homePath} openAction={whichAction}/>
		
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
			onClick={()=>{handeleAction(action.name);setwhichAction(false)}}/>
		))} 
		</SpeedDial>
		
		<Dialog 
		open={openAction}
		keepMounted
		>
		<DialogTitle>{`You must say something about your action`}</DialogTitle>
		<DialogContent>
		
		<Input type="text" id="message" placeholder="Type a message" sx={{width:"100%",marginBottom:"30px"}} name="message" autofocus onChange={handleChangeMessage}/>
		
		</DialogContent>
		<DialogActions>
		<Button sx={{color:"#D51062"}} onClick={()=>{
			setOpenAction(false)
		}}>Cancel</Button>
		<Button sx={{color:"#D51062"}} onClick={()=>{
			setwhichAction(true)
			setOpenAction(false)
		}} disabled={!messageValid}>Next</Button> 
		</DialogActions>
		
		</Dialog>
		<Snackbar
		anchorOrigin={{vertical:"top",horizontal:"center"}}
		open={whichAction}
		message={actionName }
		key={"top" + "center"}
		severity="success"
		sx={{opacity:"0.98",background:"#D51062"}}
		
		onClick={()=>{setWhichAction(false);console.log("false action")}}
		/>
		
		</Paper>
	)
	
}
