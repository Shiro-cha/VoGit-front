import React , {useEffect,useState} from "react"
// axios 
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'

//baseURL configuration
import baseURL from "../../config/baseURL"



export default function FileList({folder}){
	
	const [isLoading,setIsLoading] = useState(false)
	const [files,setFiles]=useState([])
	let api = axios.create(baseURL)
	 
	
	
	useEffect(()=>{
		setIsLoading(true)
		setFiles([])
		api.post("/files",{path:folder}).then(function(res){ 
			if(res.data.files){
				setFiles(res.data.files)
			}
			setIsLoading(false)
		}).catch(function(err){
			console.log(err)
			setIsLoading(false)
		})  
		
	},[folder])
	
	
	if(files.length===0){
		console.log("file is null")
		return (
			<div style={{width:"100% !important",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
			<Skeleton width="90%" height={70} variant="reactangular" animation="wave"/>
			<Skeleton width="90%" height={70} variant="reactangular" animation="wave"/>
			<Skeleton width="90%" height={250} variant="reactangular" animation="wave"/>
			<Skeleton width="90%" height={70} variant="reactangular" animation="wave"/>
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
					return(
						<IconButton sx={{display:"flex",flexDirection:"column"}}>
						<Folder sx={{fontSize:"70px"}}/>
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
