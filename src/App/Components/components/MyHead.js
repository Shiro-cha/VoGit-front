import Chip from "@mui/material/Chip"
import React from "react"
import Skeleton from "@mui/material/Skeleton"

function MyHeadEl({myHead,setCurrentFolder,sep,currentFolder}){
	if(myHead.length > 0){
		let headPath =""
 			return(
			
			myHead.map(function(value){
				if(value){
					headPath = headPath+sep+value
					return(
						<Chip label={value} sx={{cursor:"pointer"}} onClick={()=>{setCurrentFolder(headPath);console.log(currentFolder)}}/>
					)	
				}
				
			})
 			)
		
		
	}else{
			return (
				<>
				<Skeleton width={70} height={50}/>&nbsp;&nbsp;
				<Skeleton width={70} height={50}/>&nbsp;&nbsp;
				<Skeleton width={70} height={50}/>&nbsp;&nbsp;
				<Skeleton width={70} height={50}/>
				</>
			)
		}
	
}


export default MyHeadEl
