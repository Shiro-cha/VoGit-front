import React ,{useState,useEffect} from "react"
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

export default function ListDistant(){
	
	const [containersDistant,setContainersDistant] = useState([])
	
	
	let api = axios.create(baseURL) 
	useEffect(()=>{
		
	
		api.post("/svc/containers").then(function(res){
			if(res.data["distant"] && res.data["local"]){
				let containerTemp = []
				for (let i = 0 ; i < res.data["distant"].length ; i++){
					
					api.post("/svc/log/distant",{path:res.data["distant"][i].path}).then(function(resc){
						if(i===0){
							containerTemp = []		
						}
						containerTemp.push({content:res.data["distant"
						][i],commits:resc.data["All"]})
						
						
						if(i === (res.data["distant"].length-1) ){
							setContainersDistant(containerTemp)
							console.log(containersDistant)
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
	
	
	
	let ListHistDistant = ({commits})=>{
		if(commits.length !==0){
			
			return(
				commits.map(function(nombre,commit){
					console.log(nombre)
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
	
	
	if(containersDistant.length > 0){
		
		return(
			
			containersDistant.map(function(cont){
				
				return( 
				<>
				<Grid item xs={11}>	
				<ListItemButton onClick={()=>{
					console.log(cont.content.hash)
				}} className="w-100 border-1">
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
				<Collapse className="w-100" in={true} timeout="auto" unmountOnExit>
				<ListHistDistant commits={cont.commits}/>
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
