import React ,{useState,useEffect}from "react"
import {Computer,Person,Key} from "@mui/icons-material"
import Container from "@mui/material/Container"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import Button from "@mui/material/Button"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

export default function Login(){
	const [isSendingHostInfo,setIsSendingHostInfo] = useState(false)
	const [readyToSend,setReadyToSend] = useState(false)
	const [hostname,setHostname] = useState("")
	const [username,setUsername] = useState("")
	const [password,setPassword] = useState("")
	const [errorhostname,seterrorHostname] = useState(false)
	const [errorusername,seterrorUsername] = useState(false)
	const [errorpassword,seterrorPassword] = useState(false)
	function checkHostInfo(e){
		setIsSendingHostInfo(!isSendingHostInfo) 
	}
	
	useEffect(()=>{
		if(hostname && username && password){
			setReadyToSend(true)
		}else{
			setReadyToSend(false)
		}
	},[hostname,username,password])
	
	
	useEffect(()=>{
		if(!hostname){
			seterrorHostname(true)
		}else{
			seterrorHostname(false)
		}
	},[hostname])
	
	useEffect(()=>{
		if(!username){
			seterrorUsername(true)
		}else{
			seterrorUsername(false)
		}
	},[username])
	
	useEffect(()=>{
		if(!password){
			seterrorPassword(true)
		}else{
			seterrorPassword(false)
		}
	},[password])
	
	return(
		<Backdrop  open={true} sx={{backgroundColor:"#dddddd"}}>
		
			<Card sx={{width:"320px",margin:"0 auto"}}>
		<CardHeader sx={{backgroundColor:"#f3f3f3",color:"#6d6d6d"}}  title="Je me connecte" />
		<CardContent sx={{padding:"20px"}}>
		<InputAdornment type="text" id="hostname" placeholder="Hostname" sx={{width:"100%",marginBottom:"30px"}} name="hostname" onChange={(e)=>{setHostname(e.target.value)}} value={hostname} error={errorhostname} position="start">
		<Computer/>
		</InputAdornment>
		<InputAdornment type="text" id="hostname" placeholder="Username" sx={{width:"100%",marginBottom:"30px"}} name="username" onChange={(e)=>{setUsername(e.target.value)}} value={username}
		error={errorusername} position="start">
		<Person/>
		</InputAdornment>
		<InputAdornment type="password" id="hostname" placeholder="Password" sx={{width:"100%",marginBottom:"10px"}} name="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}
		error={errorpassword} position="start">
		<Key/>
		
		</InputAdornment>
		</CardContent>
		<CardActions sx={{padding:"20px"}}>
		<Button variant="contained" sx={{width:"100%",fontWeight:"bold"}} onClick={checkHostInfo} disabled={!readyToSend}>Connect</Button>
		</CardActions>
		</Card>
		
		{
			//To show when loading
			
		}
		<Backdrop open={isSendingHostInfo} sx={{opacity:"0.2"}} onClick={checkHostInfo}>
			<CircularProgress />
			</Backdrop>
		</Backdrop>
	)
	
}
