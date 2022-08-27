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
import InsertDriveFile from '@mui/icons-material/InsertDriveFile'
import AudioFile from '@mui/icons-material/AudioFile'
import Code from '@mui/icons-material/Code'
import Css from '@mui/icons-material/Css'
import Javascript from '@mui/icons-material/Javascript'
import Php from '@mui/icons-material/Php'
import InsertPhoto from '@mui/icons-material/InsertPhoto'

//baseURL configuration
import baseURL from "../../config/baseURL"



export default function FileList({currentFolder,setCurrentFolder,sep,host,homePath}){
	
	const [isLoading,setIsLoading] = useState(false)
	const [files,setFiles]=useState([])
	const [alreadyGet,setAlreadyGet] = useState(false)

	const [fromAbutton,setFromAbutton] =useState(false) 
	
	let api = axios.create(baseURL)
	console.log(host)
	function openPath(type,filename,path,sep,setCurrentFolder,host){
		if(type==="d"){ 
			setIsLoading(true)
			setFiles([])
			setAlreadyGet(false)
			
			api.post("/files",{path:`${path}${sep}${filename}`,hostname:host||"localhost"}).then(function(res){ 
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
		
		//if(!fromAbutton){
		openPath("d",currentFolder,"","",setCurrentFolder,host);
			setFromAbutton(false)
		//}
		
		
	},[currentFolder])
	useEffect(()=>{
		openPath("d",homePath,"","",setCurrentFolder,host); 
	},[host])
	
	
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
					if(file.name[0]!=="."){
					
						let fileIcon = <FlashOn/>
						switch(file.type){
							case "d":
								fileIcon = <Folder sx={{fontSize:"70px"}}/>
								break
							case "-":
								fileIcon = <Description sx={{fontSize:"70px"}}/>
								break
							case "md":
								fileIcon = <Description sx={{fontSize:"70px"}}/>
								break
							case "sh":
								fileIcon = <Description sx={{fontSize:"70px"}}/>
								break
							case "txt":
								fileIcon = <Description sx={{fontSize:"70px"}}/>
								break
							case "json":
								fileIcon = <InsertDriveFile sx={{fontSize:"70px"}}/>
								break
							case "html":
								fileIcon = <Code sx={{fontSize:"70px"}}/>
								break
							case "css":
								fileIcon = <Css sx={{fontSize:"70px"}}/>
							case "js":
								fileIcon = <Javascript sx={{fontSize:"70px"}}/>
								break
							case "mp3":
								fileIcon = <AudioFile sx={{fontSize:"70px"}}/>
							case "mp4":
								fileIcon = <Description sx={{fontSize:"70px"}}/>
								break
							case "png":
								fileIcon = <InsertPhoto sx={{fontSize:"70px"}}/>
								break
							case "jpg":
								fileIcon = <InsertPhoto sx={{fontSize:"70px"}}/>
								break
							case "jpeg":
								fileIcon = <InsertPhoto sx={{fontSize:"70px"}}/>
								break
							case "gif":
								fileIcon = <InsertPhoto sx={{fontSize:"70px"}}/>
						}
						
						return(
							<IconButton sx={{display:"flex",flexDirection:"column",width:"100px"}}  onClick={()=>{openPath(file.type,file.name,file.path,sep,setCurrentFolder,host);setFromAbutton(true)}}>
							{fileIcon}
							<i className="file-name">{file.name}</i>
							</IconButton>
						)
						
					}
					
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
