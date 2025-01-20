import BookList from "./BookList";
import "./style.css";
function Home() {
    return ( 
      <>
      <div className="heading">
        <h2>Welcome to the Online Book Library</h2>
      </div>
      <BookList/>
      </>
    );
  }
  
  export default Home;
  