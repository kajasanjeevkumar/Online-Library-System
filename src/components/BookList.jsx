import Book from "./Book"; 
import {useSelector} from "react-redux";
import "./style.css";

function BookList() {
  const Books=useSelector((store)=>store.cart.items);
  return (
    <>
      <ul className="bookList">
      {Books.map((book)=>{
        return(
            <li className="book" key={book.id}><Book book={book}></Book></li>
        )
      })}
       </ul>
    </>
  )
}

export default BookList
