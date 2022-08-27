import React,{useState,useEffect} from "react"
import axios from "axios"
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

//externe componennt

import MenuHistory from "./MenuHistory"

//baseURL configuration
import baseURL from "../../config/baseURL"

export default function ListLocal(){
	const [containersLocal,setContainersLocal] = useState([])
	const [open,setOpen] =useState(false)
	
	//list menu action
	
	const [anchorEl, setAnchorEl] = useState(null)
	
	let api = axios.create(baseURL)  
	useEffect(()=>{

	api.post("/svc/containers").then(function(res){
		if(res.data["distant"] && res.data["local"]){
			let containerTemp = []
			for (let i = 0 ; i < res.data["local"].length ; i++){
				api.post("/svc/log/",{path:res.data["local"][i].path}).then(function(resc){
					
					containerTemp.push({content:res.data["local"
					][i],commits:resc.data["all"]})
					
					if(i === (res.data["local"].length-1) ){
						setContainersLocal(containerTemp)
						console.log(containersLocal)
					}
					
					
				})
				
			}
			
		}else{
			console.log("Container is not valide")
		}
		
	}).catch(function(err){
		console.log(err)
	})

	},[])

	let ListHistoryLocal = ({commits})=>{
		if(commits.length !==0){
			return(
				commits.map(function(commit,nombre){
					console.log("---------")
					console.log(nombre)
					console.log(commit)
					console.log("---------")
					return(
						<List className="w-100">
						<ListItem
						secondaryAction={
							<MenuHistory nombre={nombre}/>}
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
	
	
	if(containersLocal.length > 0){
		
		return(
			
			containersLocal.map(function(cont,nombre){
				
				return( 
				<>
				<Grid item xs={11}>	
				<ListItemButton  onClick={()=>{
					setOpen(!open)
				}} className="w-100 border-1"
				key={nombre}
				>
				<Avatar sx={{backgroundColor:"#D51062"}}>
				<Cyclone />
				</Avatar>&nbsp;&nbsp;&nbsp;
				<ListItemText primary={cont.content.message} />
				<Typography sx={{ fontSize:"12px",color:"#7d7d7d" ,display:"inline"}}>{cont.content.path}</Typography >
				 <ExpandMore />
				</ListItemButton>
				</Grid>
				<Grid item xs={1}>
				<IconButton><Delete /></IconButton>
				</Grid>
				<Collapse className="w-100" in={open} timeout="auto" unmountOnExit>
				<ListHistoryLocal commits={cont.commits}/>
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

