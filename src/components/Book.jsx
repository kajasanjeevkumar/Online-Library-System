import { Link } from "react-router-dom"
function Book(props) {
  return (
    <>
      <img src={props.book.image} alt="_img" style={{ width: "320px", height: "200px" }}/>
      <h4>{props.book.title}</h4>
      <p>{props.book.description}</p>
      <Link to={`/bookDetails/${props.book.id}`}>More Details</Link>
    </>
  )
}

export default Book
