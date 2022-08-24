import React , {useEffect,useState} from "react"
// axios 
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'
import Description from '@mui/icons-material/Description'
import FlashOn from '@mui/icons-material/FlashOn'

//baseURL configuration
import baseURL from "../../config/baseURL"



export default function FileList({currentFolder,setCurrentFolder,sep}){
	
	const [isLoading,setIsLoading] = useState(false)
	const [files,setFiles]=useState([])
	const [alreadyGet,setAlreadyGet] = useState(false)

	const [fromAbutton,setFromAbutton] =useState(false) 
	
	let api = axios.create(baseURL)
	
	
	function openPath(type,filename,path,sep,setCurrentFolder){
		if(type==="d"){ 
			setIsLoading(true)
			setFiles([])
			setAlreadyGet(false)
			api.post("/files",{path:`${path}${sep}${filename}`}).then(function(res){ 
				if(res.data.files){
					setFiles(res.data.files)
					setCurrentFolder(`${path}${sep}${filename}`)
				}else{
					setAlreadyGet(true)
				}
				setIsLoading(false)
			}).catch(function(err){
				console.log(err)
				setIsLoading(false)
				setAlreadyGet(false)
			})  
			
			
			
		}
	}
	
	useEffect(()=>{
		console.log("Opening home")
		if(!fromAbutton){
			openPath("d",currentFolder,"","",setCurrentFolder);
			setFromAbutton(false)
		}
		
		
	},[currentFolder])
	
	
	if(files.length===0 && !alreadyGet){
		return (
			<div style={{width:"100% !important",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
			<Skeleton width="90%" height={70}  animation="wave"/>
			<Skeleton width="90%" height={70}  animation="wave"/>
			<Skeleton width="90%" height={250} variant="reactangular" animation="wave"/>
			<Skeleton width="90%" height={70}  animation="wave"/>
			<CircularProgress color="success" sx={{opacity:0.5}}/>
			</div>
		)
	}else if(files.length===0){
		
		return(
			<Typography>
			Empty folder
			</Typography>	
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
							break
						case "-":
							fileIcon = <Description sx={{fontSize:"70px"}}/>
					}
					
					return(
						<IconButton sx={{display:"flex",flexDirection:"column",width:"100px"}}  onClick={()=>{openPath(file.type,file.name,file.path,sep,setCurrentFolder);setFromAbutton(true)}}>
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
