import React , {useEffect,useState} from "react"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"
import Skeleton from "@mui/material/Skeleton"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'

//component list component
import FileList from "./FileList"

export default function FileContainer({homePath ,sep,headFolder,setHeadFolder}){
	const [myHead,setMyHead] = useState([])
	let MyHeadEl = null
	
	useEffect(()=>{
		if(headFolder){
			setMyHead(headFolder.split(sep))
			
		}
		console.log(headFolder)
	},[])
	
	if(myHead.length > 0){
		
		MyHeadEl = ()=>{
			return(<>
			{myHead.map(function(value){
				if(value){
					return(
						<Chip label={value} sx={{cursor:"pointer"}}/>
					)	
				}
				
			})}
			</>)
		}
		
	}else{
		MyHeadEl = ({headFolder})=>{
			return (
				<Skeleton width={130} height={70}/>
			)
		}
	}
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container sx={{transform:"translate(0%,-50%) !important"}}>
		<MyHeadEl headFolder={headFolder}/>
		</Container>
		
		<FileList homePath={homePath} sep={sep} setHeadFolder={setHeadFolder}/>
		</Paper>
	)
	
}
