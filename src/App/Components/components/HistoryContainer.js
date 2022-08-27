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
	const [openList,setOpenList] = useState([])
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
	
	
	
	let ListHistory = ({commits})=>{
		if(commits.length !==0){
			
			return(
				commits.map(function(commit){
					
					return(
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
							primary={commit.message}
							
							/>
							<Typography sx={{ fontSize:"12px" ,color:"#7d7d7d",display:"inline"}}>{commit.hash}</Typography >
							</ListItem>
							
							</List>
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
	
	
	let ListeContainersLocal = ()=>{
		
		if(containersLocal.length > 0){
			
			return(
				
				containersLocal.map(function(cont){
					
					return( 
					<>
					<Grid item xs={11}>	
					<ListItemButton onClick={()=>{
						console.log(cont.open)
						openList[cont.open] = !openList[cont.open]
						setOpenList(openList)
						console.log(openList[cont.open])
					}} className="w-100 border-1">
					<Avatar sx={{backgroundColor:"#D51062"}}>
					<Cyclone />
					</Avatar>&nbsp;&nbsp;&nbsp;
					<ListItemText primary={cont.content.message} /> 
					<Typography sx={{ fontSize:"12px",color:"#7d7d7d" ,display:"inline"}}>{cont.content.path}</Typography >
					{open ? <ExpandLess /> : <ExpandMore />} 
					</ListItemButton>
					</Grid>
					<Grid item xs={1}>
					<IconButton><Delete /></IconButton>
					</Grid>
					<Collapse className="w-100" in={openList[cont.open] || true} timeout="auto" unmountOnExit>
					<ListHistory commits={cont.commits}/>
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
	
	let ListeContainersDistant = ()=>{
		
		if(containersDistant.length > 0){
		
			return(
				
				containersDistant.map(function(cont){
					
					return( 
						<>
						<Grid item xs={11}>	
						<ListItemButton onClick={()=>{
							console.log(cont.open)
							openList[cont.open] = !openList[cont.open]
							setOpenList(openList)
							console.log(openList[cont.open])
						}} className="w-100 border-1">
						<Avatar sx={{backgroundColor:"#D51062"}}>
						<Cyclone />
						</Avatar>&nbsp;&nbsp;&nbsp;
						<ListItemText primary={cont.content.message} />
						<Typography sx={{ fontSize:"12px",color:"#7d7d7d" ,display:"inline"}}>{cont.content.path}</Typography >
						{open ? <ExpandLess /> : <ExpandMore />} 
						</ListItemButton>
						</Grid>
						<Grid item xs={1}>
						<IconButton><Delete /></IconButton>
						</Grid>
						<Collapse className="w-100" in={openList[cont.open] || true} timeout="auto" unmountOnExit>
						<ListHistory commits={cont.commits}/>
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
	
	useEffect(()=>{
		
		api.post("/svc/containers").then(function(res){
			setOpenList([])
			if(res.data["distant"] && res.data["local"]){
				let containerTemp = []
				let openListTemp = openList
				for (let i = 0 ; i < res.data["distant"].length ; i++){
					console.log(res.data["distant"][i].path)
					api.post("/svc/log/distant",{path:res.data["distant"][i].path}).then(function(resc){
						containerTemp.push({content:res.data["distant"
						][i],open:openListTemp.length,commits:resc.data["All"]})
						
						openListTemp.push(false)
						setOpenList(openListTemp)	
					
						if(i === (res.data["distant"].length-1) ){
							setContainersDistant(containerTemp)
						}
						
						
					})
					
				}
				
				containerTemp = []
				for (let i = 0 ; i < res.data["local"].length ; i++){
					api.post("/svc/log/",{path:res.data["local"][i].path}).then(function(resc){
						containerTemp.push({content:res.data["local"
						][i],open:openListTemp.length,commits:resc.data["all"]})
						openListTemp.push(false)
						
						setOpenList(openListTemp)	
					})
					
					
				}
				setContainersLocal(containerTemp)
				
			}else{
				console.log("Container is not valide")
			}
			
		}).catch(function(err){
			console.log(err)
		})
		
	},[])
	
	useEffect(()=>{
		
		console.log("changed !!!")
		
		
	},[openList])
	
	
	
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
		<Typography component="h1" sx={{textAlign:"center",fontWeight:"bold",width:"100%",margin:"20px 30px"}} color="#4d4d4d">Distant container</Typography>

		<ListeContainersDistant/>
		  
		<Typography component="h1" sx={{textAlign:"center",fontWeight:"bold",width:"100%",margin:"20px 30px"}} color="#4d4d4d">Local container</Typography>
		
		<ListeContainersLocal/>
		</Grid>
		</Box>
		</Paper>
	)
	
}

