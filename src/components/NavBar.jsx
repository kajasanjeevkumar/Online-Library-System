import { Link } from "react-router-dom";
import "./style.css";
function NavBar() {
    return(
        <>
            <ul className="navBar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Browse Books</Link></li>
                <li><Link to="/addBook">Add Book</Link></li>
            </ul>
            <hr />
        </>
    )

  }
  
  export default NavBar;
  