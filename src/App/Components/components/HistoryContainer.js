import React , {useState} from "react"
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton"
import Collapse from "@mui/material/Collapse"
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Trash from '@mui/icons-material/Trash'

export default function HistoryContainer(){
	const [open,setOpen]=useState(false)
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container sx={{transform:"translate(0%,-50%) !important"}}>
		<Chip label="Manage your history and file version here" sx={{cursor:"pointer"}}/>
		</Container>
		<Box
		sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"flex-start"}}
		className="w-100"
		>
		
		<ListItemButton onClick={()=>{setOpen(!open)}} className="w-100">
		<ListItemText primary="Inbox" />
		{open ? <ExpandLess /> : <ExpandMore />}
		</ListItemButton>
		<Collapse in={open} timeout="auto" unmountOnExit>
		hello
		</Collapse>
		</Box>
		</Paper>
	)
	
}

