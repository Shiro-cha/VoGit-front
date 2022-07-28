import React from "react"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"

export default function FileContainer(){
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container sx={{width:"100%"}}>
		<Chip label="Home" sx={{cursor:"pointer"}}/>
		<Chip label="Desktop" sx={{cursor:"pointer"}}/>
		<Chip label="Memoire" sx={{cursor:"pointer"}}/>
		</Container>
		</Paper>
	)
	
}
