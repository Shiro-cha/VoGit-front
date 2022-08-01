import React , {useState} from "react"
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton"
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton"
import Collapse from "@mui/material/Collapse"
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Delete from '@mui/icons-material/Delete'
import Folder from '@mui/icons-material/Folder'
import History from '@mui/icons-material/History'

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
		<Grid container>
		<Grid item xs={11}>
		<ListItemButton onClick={()=>{setOpen(!open)}} className="w-100 border-1"> 
		<ListItemText primary="Inbox" />
		{open ? <ExpandLess /> : <ExpandMore />} 
		</ListItemButton>
		</Grid>
		<Grid item xs={1}>
		<IconButton><Delete /></IconButton>
		</Grid>
		<Collapse in={open} timeout="auto" unmountOnExit>
		<List>
			<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="delete">
				<Delete />
				</IconButton>}
			>
			<ListItemAvatar>
			<Avatar>
			<Folder />
			</Avatar>
			</ListItemAvatar>
			<ListItemText
			primary="Single-line item"
			
			/>
			</ListItem>
			<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="delete">
				<Delete />
				</IconButton>}
				>
				<ListItemAvatar>
				<Avatar>
				<History />
				</Avatar>
				</ListItemAvatar>
				<ListItemText
				primary="Single-line item"
				
				/>
				</ListItem>
				<ListItem
				secondaryAction={
					<IconButton edge="end" aria-label="delete">
					<Delete />
					</IconButton>}
					>
					<ListItemAvatar>
					<Avatar>
					<Folder />
					</Avatar>
					</ListItemAvatar>
					<ListItemText
					primary="Single-line item"
					
					/>
					</ListItem>
		</List>
		</Collapse>
		</Grid>
		</Box>
		</Paper>
	)
	
}

