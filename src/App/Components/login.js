import React ,{useState,useEffect}from "react"
//icon
import FlashOn from "@mui/icons-material/FlashOn"
import Key from "@mui/icons-material/Key"
//icon end
import Container from "@mui/material/Container"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import "../css/login.css"


export default function Login(){
	const [isSendingHostInfo,setIsSendingHostInfo] = useState(false)
	const [readyToSend,setReadyToSend] = useState(false)
	const [hostname,setHostname] = useState("")
	const [username,setUsername] = useState("")
	const [password,setPassword] = useState("")
	const [errorhostname,seterrorHostname] = useState(false)
	const [errorusername,seterrorUsername] = useState(false)
	const [errorpassword,seterrorPassword] = useState(false)
	const [openDialog,setOpenDialog] =  useState(false)
	const [firstLoad,setFirstLoad] = useState(true)
	function showPassWordDialog(e){
		setOpenDialog(true) 
	}
	
	function checkHostInfo(){
		setOpenDialog(false)
		setIsSendingHostInfo(!isSendingHostInfo)
	}
	
	useEffect(()=>{
		if(hostname && username ){
			setReadyToSend(true)
		}else{
			setReadyToSend(false)
		}
	},[hostname,username,password])
	
	
		useEffect(()=>{
			if(!firstLoad){
				setFirstLoad(false)
			if(!hostname){
				seterrorHostname(true)
			}else{
				seterrorHostname(false)
			}
			}
		},[hostname])
		
		useEffect(()=>{
			if(!firstLoad){
				setFirstLoad(false)
			if(!username){
				seterrorUsername(true)
			}else{
				seterrorUsername(false)
			}
			}
		},[username])
		
		useEffect(()=>{
			if(!firstLoad){
				setFirstLoad(false)
			if(!password){
				seterrorPassword(true)
			}else{
				seterrorPassword(false)
			}
			}
		},[password])
	
	
	return(
		<Backdrop  open={true} sx={{backgroundColor:"#ededed"}}>
		
			<Card  id="login">
		<CardHeader sx={{backgroundColor:"#f3f3f3",color:"#6d6d6d",textAlign:"center"}}  title="Connect to a host" />
		<CardContent sx={{padding:"20px"}}>
		
		<Input type="text" id="hostname" placeholder="Hostname" sx={{width:"100%",marginBottom:"30px"}} name="hostname" onChange={(e)=>{setHostname(e.target.value)}} value={hostname} error={errorhostname} />
		
		
		<Input type="text" id="hostname" placeholder="Username" sx={{width:"100%",marginBottom:"30px"}} name="username" onChange={(e)=>{setUsername(e.target.value)}} value={username}
		error={errorusername} />
		
		</CardContent>
		<CardActions sx={{padding:"20px"}}>
		<Button variant="contained" sx={{width:"100%",fontWeight:"bold"}} onClick={showPassWordDialog} disabled={!readyToSend}><FlashOn /> Connect</Button>
		</CardActions>
		</Card>
		
		{
			//To show when loading
			
		}
		<Backdrop open={isSendingHostInfo} sx={{opacity:"0.2"}} onClick={checkHostInfo}>
			<CircularProgress />
			</Backdrop>
		
		
		{
			//password  dialog
		}
		
		
		<Dialog
		open={openDialog}
		
		keepMounted
		
		aria-describedby="alert-dialog-slide-description"
		>
		<DialogTitle>{`You must type your password first`}</DialogTitle>
		<DialogContent>
		<DialogContentText id="alert-dialog-slide-description">
		
		<Input type="password" id="password" placeholder="Type your password" sx={{width:"100%",marginBottom:"30px"}} name="username" onChange={(e)=>{setPassword(e.target.value)}} value={password}
		error={errorpassword} />
		
		</DialogContentText>
		</DialogContent>
		<DialogActions>
		<Button onClick={()=>{setOpenDialog(false)}}>Annulé</Button>
		<Button disabled={errorpassword} onClick={checkHostInfo}>Valider</Button>
		</DialogActions>
		</Dialog>
		
		</Backdrop>
		
	)
	
}
