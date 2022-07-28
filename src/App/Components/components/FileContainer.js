import React from "react"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"

export default function FileContainer(){
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container>
		<Chip label="Home"/>
		<Chip label="Desktop"/>
		<Chip label="Memoire"/>
		</Container>
		</Paper>
	)
	
}
