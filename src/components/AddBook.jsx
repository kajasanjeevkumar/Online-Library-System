import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";

function AddBook() {
    const [title,setTitle]=useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [pages,setPages]=useState();
    const [price,setPrice]=useState();

    const dispatch=useDispatch();
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(title && author && category && description && rating && image){
            dispatch(addItem({
                id:Date.now(),
                title,
                author,
                category,
                page_count:pages,
                price,
                image,
                description,
                rating
            }));

            navigate(`/books/${category}`);
        }
    }
    return(
        <>
            <h2>Add a new Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} rows="8" cols="40" required />
                <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
                <input type="number" placeholder="Page Count" value={pages} onChange={(e)=>setPages(e.target.value)} required/>
                <input type="number" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                <button type="submit">Add Book</button>
            </form>
        </>
    )
   
  }
  
export default AddBook;
  