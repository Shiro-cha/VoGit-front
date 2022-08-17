import React , {useEffect,useState} from "react"
// axios 
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'
import FlashOn from '@mui/icons-material/FlashOn'

//baseURL configuration
import baseURL from "../../config/baseURL"



export default function FileList({homePath,sep}){
	
	const [isLoading,setIsLoading] = useState(false)
	const [files,setFiles]=useState([])
	const [path,setPath] = useState("")
	let api = axios.create(baseURL)
	let ActivePath = path ==="" ? homePath : path
	
	
	
	function openPath(type,pathname,path,sep){
		if(type==="d"){
			setIsLoading(true)
			setFiles([])
			api.post("/files",{path:ActivePath}).then(function(res){ 
				if(res.data.files){
					setFiles(res.data.files)
				}
				setIsLoading(false)
			}).catch(function(err){
				console.log(err)
				setIsLoading(false)
			}) 
			setPath(`${path}${sep}${pathname}${sep}`)
		}
	}
	
	useEffect(()=>{
		
		api.post("/files",{path:"/home/ubuntu"}).then(function(res){ 
			if(res.data.files){
				setFiles(res.data.files)
			}
			setIsLoading(false)
		}).catch(function(err){
			console.log(err)
			setIsLoading(false)
		}) 
		
	},[homePath])
	
	
	if(files.length===0){
		console.log("file is null")
		return (
			<div style={{width:"100% !important",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
			<Skeleton width="90%" height={70}  animation="wave"/>
			<Skeleton width="90%" height={70}  animation="wave"/>
			<Skeleton width="90%" height={250} variant="reactangular" animation="wave"/>
			<Skeleton width="90%" height={70}  animation="wave"/>
			<CircularProgress color="success" sx={{opacity:0.5}}/>
			</div>
		)
	}else{
		let ListFile = ()=>{
			return(
				<Box
				sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"flex-start"}}
				className="w-100"
				>
				
				{files.map(function(file){
					let fileIcon = <FlashOn/>
					switch(file.type){
						case "d":
							fileIcon = <Folder sx={{fontSize:"70px"}}/>
							
					}
					
					return(
						<IconButton sx={{display:"flex",flexDirection:"column"}}  onClick={()=>{openPath(file.type,file.name,path,sep)}}>
						{fileIcon}
						<i className="file-name">{file.name}</i>
						</IconButton>
					)
				})	}	
				</Box>
					
				
			)
			
		}
		return (
			<>
			<ListFile />
			</>
		)	
	}
	
}
