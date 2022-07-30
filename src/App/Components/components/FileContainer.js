import React from "react"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Folder from '@mui/icons-material/Folder'

export default function FileContainer(){
	 
	return(
		<Paper sx={{width:"97%",height:"100%",margin:"0 auto"}} elevation={1}>
		<Container>
		<Chip label="Home" sx={{cursor:"pointer"}}/>
		<Chip label="Desktop" sx={{cursor:"pointer"}}/>
		<Chip label="Memoire" sx={{cursor:"pointer"}}/>
		</Container>
		<Box
	sx={{display:"flex",flexDirection:"row",flexWarp:"warp",alignItems:"flex-start",marginTop:"20px",width:"500px",height:"100%",background:"green"}}>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		<IconButton sx={{display:"flex",flexDirection:"column"}}>
		<Folder sx={{fontSize:"70px"}}/>
		<i className="file-name">My folder</i>
		</IconButton>
		
		</Box>
		</Paper>
	)
	
}
