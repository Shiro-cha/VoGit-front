import React , {useEffect,useState} from "react"
// axios 
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'
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
		api.post("/files",{path:folder}).then(function(res){ 
			if(res.data.files){
				setFiles(res.data.files)
			}
			setIsLoading(false)
		}).catch(function(err){
			console.log("error")
			setIsLoading(false)
		})  
		
	},[folder])
	
	
	if(files.length===0){
		console.log("file is null")
		return (
			<div sx={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
			<CircularProgress />
			</div>
		)
	}else{
		let ListFile = ()=>{
			return(
   				
					files.map(function(file){
						return(
							<IconButton sx={{display:"flex",flexDirection:"column"}}>
							<Folder sx={{fontSize:"70px"}}/>
							<i className="file-name">{file.name}</i>
							</IconButton>
						)
					})		
				
			)
			
		}
		return (
			<>
			<ListFile />
			</>
		)	
	}
	
}
