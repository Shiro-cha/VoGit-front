 import React ,{useState,useEffect}from "react"
//icon
import FlashOn from "@mui/icons-material/FlashOn"

//import util module

import axios from "axios"

//icon end

import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import "../css/login.css"

// next page here
import Explorer from "./explorer"


export default function Login({setPageComponent}){
	const [isSendingHostInfo,setIsSendingHostInfo] = useState(false)
	const [readyToSend,setReadyToSend] = useState(false)
	const [hostname,setHostname] = useState("")
	const [username,setUsername] = useState("")
	const [password,setPassword] = useState("")
	const [errorhostname,seterrorHostname] = useState(false)
	const [errorusername,seterrorUsername] = useState(false)
	const [errorpassword,seterrorPassword] = useState(false)
	const [connexionError,setConnexionError] = useState(false)
	const [openDialog,setOpenDialog] =  useState(false)
	
	//is first loadind
	const [firstLoad,setFirstLoad] = useState(true)
	
	//message from server 
	const [messageFromServer,setMessageFromServer] = useState("")
	
	function showPassWordDialog(e){
		setOpenDialog(true) 
	}
	let api = axios.create({
		baseURL:"http://localhost:3001"
	})
	
	function checkHostInfo(){
		setOpenDialog(false)
		setIsSendingHostInfo(true)
		api.post("/connect",{"hostname":hostname,"username":username,"password":password}).then(function(res){
			if(res.data.isSuccess){
				setPageComponent(<Explorer setPageComponent={setPageComponent} remote={res.data.remote}/>)
			}else{
				setMessageFromServer("Error in your information")
				setConnexionError(true)
			}
			setIsSendingHostInfo(false)
		}).catch(function(err){
			console.log(err)
			setIsSendingHostInfo(false)
			setMessageFromServer(err.response.data.message)
			setConnexionError(true)
		})
	}
	
	useEffect(()=>{
		setConnexionError(false)
		if(hostname && username ){
			setReadyToSend(true)
		}else{
			setReadyToSend(false)
		}
	},[hostname,username,password])
	
	

		useEffect(()=>{
			if(!hostname){
				seterrorHostname(true)
			}else{
				if(firstLoad){
				seterrorHostname(false)
				}
			}
		},[hostname])
		
		useEffect(()=>{
				
			if(!username){
				seterrorUsername(true)
			}else{
				if(firstLoad){
					seterrorUsername(false)	
				}
				
			}
			setFirstLoad(false)
		},[username])
		
		useEffect(()=>{
				
			if(!password){
				seterrorPassword(true)
			}else{
				if(firstLoad){
				seterrorPassword(false)
				}
				setFirstLoad(false)
			}
		},[password])
	
	
	return(
		<Backdrop  open={true} sx={{backgroundColor:"#ededed"}}>
		
			<Card  id="login">
			<CardHeader sx={{backgroundColor:"#D51062",color:"#6d6d6d",textAlign:"center"}}  title="Connect to a host" />
		<CardContent sx={{padding:"20px"}}>
		
		<Input type="text" id="hostname" placeholder="Hostname" sx={{width:"100%",marginBottom:"30px"}} name="hostname" onChange={(e)=>{setHostname(e.target.value)}} value={hostname} error={errorhostname} />
		
		
		<Input type="text" id="hostname" placeholder="Username" sx={{width:"100%",marginBottom:"30px"}} name="username" onChange={(e)=>{setUsername(e.target.value)}} value={username}
		error={errorusername} />
		
		</CardContent>
		<CardActions sx={{padding:"20px"}}>
		<Button variant="contained"  sx={{width:"100%",fontWeight:"bold",backgroundColor:"#D51062"}} onClick={showPassWordDialog} disabled={!readyToSend}><FlashOn /> Connect</Button>
		</CardActions>
		</Card>
		<Snackbar open={connexionError}
		anchorOrigin={{
			vertical:"bottom",
			horizontal:"center"
		}}
		key={"buttom","center"}>
		<Alert severity="error">
		{messageFromServer}
		</Alert>
		</Snackbar>
		
		
		{
			//To show when loading
			
		}
		<Backdrop open={isSendingHostInfo} sx={{opacity:"0.2"}}>
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
		<Button onClick={()=>{setOpenDialog(false);setPassword("")}} sx={{color:"#D51062"}}>Cancel</Button>
		<Button disabled={errorpassword} onClick={checkHostInfo}sx={{color:"#D51062"}}>Connect</Button> 
		</DialogActions>
		</Dialog>
		
		</Backdrop>
		
	)
	
}
