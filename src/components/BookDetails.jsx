import { useParams,Link } from "react-router-dom"
import { useSelector } from "react-redux";

function BookDetails() {
    const {id}=useParams();
    const book=useSelector((store)=>store.cart.items.find((b)=>b.id===parseInt(id)));
    return(
        <>
            <div className="heading">
                <h1>Book Details</h1>
            </div>
            <h3>Title: "{book.title}"</h3>
            <h3>Author: "{book.author}"</h3>
            <h3>Description: "{book.description}"</h3>
            <h3>Rating: "{book.rating}"</h3>
            <h3>Category: "{book.category}"</h3>
            <h3>Page Count: "{book.page_count}"</h3>
            <h3>Price: "{book.price}"</h3>
            <img className="detail-image" src={book.image} alt="_img" style={{height:"250px"}} />
            <h1 className="heading"><Link to="/books">Back to Browse</Link></h1>
        </>
    )
    
  }
  
  export default BookDetails
  