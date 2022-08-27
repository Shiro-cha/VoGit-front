import React , {useState,useEffect} from "react"
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"
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
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton"
import Collapse from "@mui/material/Collapse"
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Delete from '@mui/icons-material/Delete'
import MoreVert from '@mui/icons-material/MoreVert'
import Commit from '@mui/icons-material/Commit'
import Cyclone from '@mui/icons-material/Cyclone'
import ChangeHistory from '@mui/icons-material/ChangeHistory'
import ViewInArSharp from '@mui/icons-material/ViewInArSharp'


//ListeContainersDistant

import ListLocal from "./ListLocal"
import ListDistant from "./ListDistant"

//baseURL configuration
import baseURL from "../../config/baseURL"


let containerObjet =[]

export default function HistoryContainer(){
	const [anchor, setAnchor] = useState(null);
	const [open,setOpen]=useState(false)
	const [histories, setHistories] =  useState([])
	const openMenu = (event) => {
		setAnchor(event.currentTarget);
	};
	
	let api = axios.create(baseURL)
	
	const closeMenu = () => {
		setAnchor(null);
	};
	const onMenuItemClick = (event) => {
		setAnchor(null);
	};
	
	
	
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto",overflow:"auto"}} elevation={1}>
		<Container>
		<Chip label="Manage your history and file version here" sx={{cursor:"pointer",zIndex:"1700 !important"}}/>
		</Container>
		<br/><br/><br/>
		<Box
	sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"flex-start"}}
		className="w-100"
		>
		 
		<Grid container>
		  
		<Typography component="h1" sx={{textAlign:"center",fontWeight:"bold",width:"100%",margin:"20px 30px"}} color="#4d4d4d">Local container</Typography>
		
		<ListLocal/>
		
		<Typography component="h1" sx={{textAlign:"center",fontWeight:"bold",width:"100%",margin:"20px 30px"}} color="#4d4d4d">Distant container</Typography>
		
		<ListDistant/>
		</Grid>
		</Box>
		</Paper>
	)
	
}

