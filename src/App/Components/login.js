import React ,{useState,useEffect}from "react"
import Container from "@mui/material/Container"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

export default function Login(){
	const [isSendingHostInfo,setIsSendingHostInfo] = useState(false)
	const [readyToSend,setReadyToSend] = useState(false)
	const [hostname,setHostname] = useState("")
	const [username,setUsername] = useState("")
	const [password,setPassword] = useState("")
	
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
	
	return(
		<Container  variant="contained">
		
			<Card sx={{width:"520px",margin:"0 auto"}}>
		<CardHeader sx={{backgroundColor:"#f3f3f3",color:"#6d6d6d"}}  title="Je me connecte" />
		<CardContent sx={{padding:"20px"}}>
		<Input type="text" id="hostname" placeholder="Hostname" sx={{width:"100%",marginBottom:"30px"}} name="hostname" onChange={(e)=>{setHostname(e.target.value)}} value={hostname}/>
		<Input type="text" id="hostname" placeholder="Username" sx={{width:"100%",marginBottom:"30px"}} name="username" onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
		<Input type="password" id="hostname" placeholder="Password" sx={{width:"100%",marginBottom:"10px"}} name="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
		</CardContent>
		<CardActions sx={{padding:"20px"}}>
		<Button variant="contained" sx={{width:"100%",fontWeight:"bold"}} onClick={checkHostInfo} disabled={!readyToSend}>Connect</Button>
		</CardActions>
		</Card>
		
		{
			//To show when loading
			
		}
		<Backdrop open={isSendingHostInfo} sx={{opacity:"0.5"}} onClick={checkHostInfo}>
			<CircularProgress />
			</Backdrop>
		</Container>
	)
	
}
