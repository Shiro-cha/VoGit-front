import React from "react"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'

//component list component
import FileList from "./FileList"

export default function FileContainer({homePath}){
	 
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container sx={{transform:"translate(0%,-50%) !important"}}>
		<Chip label="Home" sx={{cursor:"pointer"}}/>
		<Chip label="Desktop" sx={{cursor:"pointer"}}/>
		<Chip label="Memoire" sx={{cursor:"pointer"}}/>
		</Container>
		
		<FileList folder={homePath}/>
		</Paper>
	)
	
}
