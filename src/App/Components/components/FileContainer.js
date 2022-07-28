import React from "react"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'

export default function FileContainer(){
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container>
		<Chip label="Home" sx={{cursor:"pointer"}}/>
		<Chip label="Desktop" sx={{cursor:"pointer"}}/>
		<Chip label="Memoire" sx={{cursor:"pointer"}}/>
		</Container>
		<Container sx={{marginTop:"20px"}}>
		<IconButton>
		<Folder/>
		</IconButton>
		</Container>
		</Paper>
	)
	
}
