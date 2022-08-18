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
import MyHead from "./MyHead"

export default function FileContainer({homePath ,sep}){
	const [currentFolder,setCurrentFolder] = useState(homePath)
	const [myHead,setMyHead] = useState([])
	let MyHeadEl = null
	
	useEffect(()=>{
		if(currentFolder){
			setMyHead(currentFolder.split(sep))
			
		}
	},[currentFolder])
	
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container sx={{transform:"translate(0%,-50%) !important"}}>
		<MyHeadEl myHead={myHead}/>
		</Container>
		
		<FileList currentFolder={currentFolder} setCurrentFolder={setCurrentFolder}  sep={sep} />
		</Paper>
	)
	
}
