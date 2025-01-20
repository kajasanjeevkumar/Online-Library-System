import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import BrowseBooks from "./components/BrowseBooks";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";
import NavBar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return(
    <>
    <Provider store={appStore}>
    <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/books" element={<BrowseBooks/>} />
          <Route path="/books/:category" element={<BrowseBooks/>} />
          <Route path="/bookDetails/:id" element={<BookDetails/>} />
          <Route path="/addBook" element={<AddBook/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
    </Provider>
  </>
  )
  
}

export default App
