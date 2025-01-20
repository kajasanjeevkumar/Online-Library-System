import { Link } from "react-router-dom"

function NotFound() {
    return(
        <>
            <h1>Oops!! Provided Route doesn't exist. Page Not Found</h1>
            <Link to="/"><h3>Back to Home</h3></Link>
        </>
    )
    
  }
  
  export default NotFound
  