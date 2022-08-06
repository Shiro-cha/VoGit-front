import React , {useState} from "react"
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton"
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar'
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton"
import Collapse from "@mui/material/Collapse"
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Delete from '@mui/icons-material/Delete'
import MoreVert from '@mui/icons-material/MoreVert'
import Commit from '@mui/icons-material/Commit'
import Cyclone from '@mui/icons-material/Cyclone'

export default function HistoryContainer(){
	const [anchor, setAnchor] = useState(null);
	const [open,setOpen]=useState(false)
	const openMenu = (event) => {
		setAnchor(event.currentTarget);
	};
	
	const closeMenu = () => {
		setAnchor(null);
	};
	const onMenuItemClick = (event) => {
		setAnchor(null);
	};
	
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container sx={{transform:"translate(0%,-50%) !important"}}>
		<Chip label="Manage your history and file version here" sx={{cursor:"pointer"}}/>
		</Container>
		<br/><br/><br/>
		<Box
		sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"flex-start"}}
		className="w-100"
		>
		<Grid container>
		<Grid item xs={11}>
		<ListItemButton onClick={()=>{setOpen(!open)}} className="w-100 border-1">
		<Avatar sx={{backgroundColor:"#D51062"}}>
		<Cyclone />
		</Avatar>&nbsp;&nbsp;&nbsp;
		<ListItemText primary="My message here" />
		<Typography sx={{ fontSize:"12px",color:"#7d7d7d" ,display:"inline"}}>/home/shiro/Memoire/</Typography >
		{open ? <ExpandLess /> : <ExpandMore />} 
		</ListItemButton>
		</Grid>
		<Grid item xs={1}>
		<IconButton><Delete /></IconButton>
		</Grid>
		<Collapse className="w-100" in={open} timeout="auto" unmountOnExit>
		<List className="w-100">
			<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="action">
				<MoreVert />
				</IconButton>}
			>
			<ListItemAvatar>
			<Avatar>
			<Commit />
			</Avatar>
			</ListItemAvatar>
			<ListItemText
			primary="Thrid commit of VoGit"
			
			/>
			<Typography sx={{ fontSize:"12px" ,color:"#7d7d7d",display:"inline"}}>777baf3cdc592803940b1aaeb72e166598821d0c</Typography >
			</ListItem>
			<ListItem
			secondaryAction={
				<Box>
				<IconButton edge="end" aria-label="action"
				onClick={openMenu}>
				<MoreVert />
				</IconButton>
				<Menu 
				open={Boolean(anchor)}
				anchorEl={anchor}
				onClose={closeMenu}
				keepMounted
				>
				<MenuItem onClick={(event) => onMenuItemClick(event)}>
				Switch to this version
				</MenuItem>
				<MenuItem onClick={(event) => onMenuItemClick(event)}>
				Delete
				</MenuItem>
				</Menu>
				
				</Box>
				
			}
				>
				<ListItemAvatar>
				<Avatar>
				<Commit />
				</Avatar>
				</ListItemAvatar>
				<ListItemText
				primary="second verion of VoGit"
				
				/>
				<Typography sx={{ fontSize:"12px" ,color:"#7d7d7d",display:"inline"}}>777baf3cdc592803940b1aaeb72e166598821d0c</Typography >
				</ListItem>
				<ListItem
				secondaryAction={
					<IconButton edge="end" aria-label="action">
					<MoreVert />
					</IconButton>}
					>
					<ListItemAvatar>
					<Avatar>
					<Commit />
					</Avatar>
					</ListItemAvatar>
					<ListItemText
					primary="First version of vogit"
					
					/>
					<Typography sx={{ fontSize:"12px" ,color:"#7d7d7d",display:"inline"}}>777baf3cdc592803940b1aaeb72e166598821d0c</Typography >
					</ListItem>
		</List>
		</Collapse>	
		
		
		<Grid item xs={11}>
		<ListItemButton onClick={()=>{setOpen(!open)}} className="w-100 border-1"> 
		<Avatar sx={{backgroundColor:"#D51062"}}>
		<Cyclone />
		</Avatar>&nbsp;&nbsp;&nbsp;
		<ListItemText primary="Your message here" />
		<Typography sx={{ fontSize:"12px" ,color:"#7d7d7d",display:"inline"}}>/home/shiro/Memoire/</Typography >
		{open ? <ExpandLess /> : <ExpandMore />} 
		</ListItemButton>
		</Grid>
		<Grid item xs={1}>
		<IconButton><Delete /></IconButton>
		</Grid>
		<Collapse className="w-100" in={open} timeout="auto" unmountOnExit>
		<List className="w-100">
		<ListItem
		secondaryAction={
			<IconButton edge="end" aria-label="action">
			<MoreVert />
			</IconButton>}
			>
			<ListItemAvatar>
			<Avatar>
			<Commit />
			</Avatar>
			</ListItemAvatar>
			<ListItemText
			primary="Single-line item"
			
			/>
			</ListItem>
			<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="action">
				<MoreVert />
				</IconButton>}
				>
				<ListItemAvatar>
				<Avatar>
				<Commit />
				</Avatar>
				</ListItemAvatar>
				<ListItemText
				primary="Single-line item"
				
				/>
				</ListItem>
				<ListItem
				secondaryAction={
					<IconButton edge="end" aria-label="action">
					<MoreVert />
					</IconButton>}
					>
					<ListItemAvatar>
					<Avatar>
					<Commit />
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

