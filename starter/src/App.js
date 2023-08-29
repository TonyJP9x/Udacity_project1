import "./App.css";
import { useEffect, useState } from "react";
import ReadingStatus from "./ReadingStatus";
import SearchResults from "./SearchResults";
import CurentlyReading from "./CurentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import {Route, Routes, Link} from "react-router-dom"
import * as BooksAPI from "./BooksAPI"

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [bookList, setBookList] = useState([])
  useEffect(()=>{
    const initialBooks = async()=>{
      const res = await BooksAPI.getAll()
      setBookList(res)
    }
    initialBooks()
  },[])




  const showPage = (status) => {
    setShowSearchpage(status)
    
  }

  const handleData = async (data)=>{
   const allIds = [].concat(...Object.values(data))
   let allBooks = []

   await Promise.all(allIds.map(async (id) => await BooksAPI.get(id).then(res => {
    allBooks.push(res)
   })))    
    setBookList(allBooks) 

  }



  return (
    <div className="app">
      {showSearchPage ? (
        <Routes>
          <Route path="/search" element={<SearchResults readingStatus={bookList} func={showPage} sendOptionToApp={handleData}/>}/>
        </Routes>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <CurentlyReading  readingStatus={bookList} sendOptionToApp={handleData}/>
            <WantToRead readingStatus={bookList} sendOptionToApp={handleData}/>
            <Read readingStatus={bookList} sendOptionToApp={handleData}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search"  onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
