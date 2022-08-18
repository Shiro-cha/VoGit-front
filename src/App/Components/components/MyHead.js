import Chip from "@mui/material/Chip"
import React from "react"
import Skeleton from "@mui/material/Skeleton"

function MyHeadEl({myHead,setCurrentFolder,sep}){
	if(myHead.length > 0){
		let headPath = ""
 			return(
			myHead.map(function(value){
				headPath = headPath +sep +value
				if(value){
					return(
						<Chip label={value} sx={{cursor:"pointer"}} onClick={()=>{setCurrentFolder(headPath);console.log("headddd")}}/>
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
