import React , {useState,useEffect} from "react"
import axios from "axios"
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

//baseURL configuration
import baseURL from "../../config/baseURL"


let containerObjet =[]

export default function HistoryContainer(){
	const [anchor, setAnchor] = useState(null);
	const [open,setOpen]=useState(false)
	const [containersDistant,setContainersDistant] = useState([])
	const [containersLocal,setContainersLocal] = useState([])
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
	
	
	
	let listeContainersLocal = ()=>{
		
		return(
			containersLocal.map(function(cont){
				
			})
		)
		
	} 
	
	let ListeContainersDistant = ()=>{
		if(containersDistant.length > 0){
		
			return(
				
				containersDistant.map(function(cont){
					
					return(
						<>
						<Grid item xs={11}>	
						<ListItemButton onClick={()=>{cont.open = !cont.open;console.log("open")}} className="w-100 border-1">
						<Avatar sx={{backgroundColor:"#D51062"}}>
						<Cyclone />
						</Avatar>&nbsp;&nbsp;&nbsp;
						<ListItemText primary="My message here" />
						<Typography sx={{ fontSize:"12px",color:"#7d7d7d" ,display:"inline"}}>{cont.content.path}</Typography >
						{open ? <ExpandLess /> : <ExpandMore />} 
						</ListItemButton>
						</Grid>
						<Grid item xs={1}>
						<IconButton><Delete /></IconButton>
						</Grid>
						<Collapse className="w-100" in={cont.open} timeout="auto" unmountOnExit>
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
							
							</List>
							</Collapse>	
							</>
					)
					
				})
				
			)
			
		}else{
			return(
				<>
				<Skeleton width="90%" height="80px" sx={{margin:"2px"}}/>
				<Skeleton width="90%" height="80px" sx={{margin:"2px"}}/>
				<Skeleton width="90%" height="80px" sx={{margin:"2px"}}/>
				</>
			)
		}
		
		
		
	}
	let listeHistories = ()=>{
		
		
	}
	
	useEffect(()=>{
		
		api.post("/svc/containers").then(function(res){
			
			if(res.data["distant"] && res.data["local"]){
				let containerTemp = []
				for (let i = 0 ; i < res.data["distant"].length ; i++){
					containerTemp.push({content:res.data["distant"][i],open:false})
				}
				
				
				setContainersDistant(containerTemp)
				containerTemp = []
				for (let i = 0 ; i < res.data["local"].length ; i++){
					containerTemp.push({content:res.data["local"][i],open:false})
				}
				setContainersLocal(containerTemp)
				
			}else{
				console.log("Container is not valide")
			}
			
		}).catch(function(err){
			console.log(err)
		})
		
	},[])
	
// 	useEffect(()=>{
// 		
// 		
// 		
// 	},[containers])
	
	
	
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
		<Typography component="h1" sx={{textAlign:"center",fontWeight:"bold",width:"100%",margin:"20px 30px"}} color="#4d4d4d">Distant container</Typography>

		<ListeContainersDistant/>
		
		<Typography component="h1" sx={{textAlign:"center",fontWeight:"bold",width:"100%",margin:"20px 30px"}} color="#4d4d4d">Local container</Typography>
		
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

