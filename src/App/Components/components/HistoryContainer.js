import React from "react"
import Paper from "@mui/material/Paper";
import ListItemButton from "@mui/material/ListItemButton";

export default function HistoryContainer(){
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container sx={{transform:"translate(0%,-50%) !important"}}>
		<Chip label="Manage your history and file version here" sx={{cursor:"pointer"}}/>
		</Container>
		</Paper>
	)
	
}

