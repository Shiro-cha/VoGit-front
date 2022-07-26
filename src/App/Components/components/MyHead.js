import Chip from "@mui/material/Chip"
import React from "react"
import Skeleton from "@mui/material/Skeleton"

function MyHeadEl({myHead,setCurrentFolder,sep,currentFolder}){
	if(myHead.length > 0){
		let headPath =""
		
		let ChipFolder = []
// 		for(let i = 0 ; i<myHead.length ; i++){
// 			
// 		}
		
 			return(
			
			myHead.map(function(value){
				
				if(value){
					ChipFolder.push(value)
					console.log(value)
					console.log(ChipFolder)
					let clickPath = `${sep}${ChipFolder.join(sep)}`
					return(
						<Chip label={value} sx={{cursor:"pointer"}} onClick={()=>{setCurrentFolder(clickPath);console.log(clickPath)}}/>
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
