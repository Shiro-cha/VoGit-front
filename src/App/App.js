import React , {useState,useEffect} from "react"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

//page liste
import Login from "./Components/login"



export default function App(){
	
	const [pageComponent,setPageComponent] = useState(<Login setPageComponent={setPageComponent}/>)
	const [pageIsReady,setPageIsReady] = useState(false)

	useEffect(()=>{
		setTimeout(function(){
			setPageIsReady(true)
		},1000)
		
	},[pageComponent])

	return(
		
		<div>
		{
		
			pageIsReady ? pageComponent :
			<Backdrop open={true} sx={{background:"#ffffff"}}>
			<CircularProgress />
			</Backdrop>
			
		}
		</div>
	)
	
	
}
