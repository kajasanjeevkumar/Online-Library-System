import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Book from "./Book";
function BrowseBooks() {
    const [search,setSearch]=useState("");
    const navigate=useNavigate();
    const handleSelect=(category)=>{
        setSearch("");
        navigate(`/books/${category}`);
    }

    let Books=useSelector((store)=>store.cart.items);
    const {category}=useParams();
    const selectedCategory=category||"Psychology";
    const FilteredBooks=Books.filter((book)=>{
        if(search){
            return(
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase())
            )
        }
        return book.category === selectedCategory;
    });
    return(
        <>
            <span className="search">
                <input className="inp-search" type="text" value={search} placeholder="Search by title or author" onChange={(e)=>setSearch(e.target.value)}/>
            </span>
           
            <select className="category" onChange={(e)=>handleSelect(e.target.value)}>
            <option value="Psychology">Psychology</option>
            <option value="Adventure">Adventure</option>
            <option value="Technology">Technology</option>
            </select>

            {/* based on category */}
            <ul className="bookList">
            {FilteredBooks.map((book)=>{
                return(
                    <li className="book" key={book.id}><Book book={book}></Book></li>
                )
            })}
            



            </ul>
        </>
    )
    
  }
  
  export default BrowseBooks
  