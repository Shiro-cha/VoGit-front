import React , {useState,useEffect} from "react"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

//page liste
import Login from "./Components/login"



export default function App(){
	const [pageComponent,setPageComponent] = useState(<Backdrop open={true} sx={{background:"#ffffff"}}>
	<CircularProgress />
	</Backdrop>)
	const [pageIsReady,setPageIsReady] = useState(false)

	useEffect(()=>{
		setPageComponent(<Login setPageComponent={setPageComponent}/>)
	},[pageIsReady])

	return(
		
		<div>
		{
		
			 pageComponent
			
			
		}
		</div>
	)
	
	
}
