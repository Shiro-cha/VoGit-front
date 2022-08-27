import React from "react"
import axios from "axios"

//baseURL configuration
import baseURL from "../../config/baseURL"

export default function ListLocal(){
	const [containersLocal,setContainersLocal] = useState([])

	
	let api = axios.create(baseURL)  
	

	api.post("/svc/containers").then(function(res){
		setOpenList([])
		if(res.data["distant"] && res.data["local"]){
			let containerTemp = []
			for (let i = 0 ; i < res.data["local"].length ; i++){
				console.log()
				api.post("/svc/log/",{path:res.data["local"][i].path}).then(function(resc){
					if(i===0){
						containerTemp = []		
					}
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



	let ListHistoryLocal = ({commits})=>{
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

