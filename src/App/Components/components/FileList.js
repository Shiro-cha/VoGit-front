import React , {useEffect,useState} from "react"
// axios 
import axios from "axios"

import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'



export default function FileList({folder}){
	
	const [isLoading,setIsLoading] = useState(false)
	console.log(folder)
	let api = axios.create({
		baseURL:"http://localhost:3001"
	})
	 
	
	
	useEffect(()=>{
		setIsLoading(true)
		api.post("/files",{path:folder}).then(function(res){
			let files = res.data
			if(files){
				console.log(files)
			}else{
				console.log("no file our directory")
			}
			setIsLoading(false)
		}).catch(function(err){
			console.log("error")
			setIsLoading(false)
		})
		
	},[folder])
	
	return (
		<>
		Folder here!!!
		</>
	)
}
