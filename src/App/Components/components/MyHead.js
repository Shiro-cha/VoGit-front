

function MyHeadEl({myHead}){
	if(myHead.length > 0){
		
			return(<>
			{myHead.map(function(value){
				if(value){
					return(
						<Chip label={value} sx={{cursor:"pointer"}}/>
					)	
				}
				
			})}
			</>)
		
		
	}else{
			return (
				<Skeleton width=70} height={50}/>
			)
		}
	
}


export default MyHeadEl
