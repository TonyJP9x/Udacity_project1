import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI"
import Routing from "./Routing";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";


function App() {
  const [bookList, setBookList] = useState([])
  useEffect(() => {
    const initialBooks = async () => {
      const res = await BooksAPI.getAll()
      setBookList(res)
    }
    initialBooks()
  }, [])

  const handleData = async (data) => {
    const allIds = [].concat(...Object.values(data))
    let allBooks = []
    await Promise.all(allIds.map(async (id) => await BooksAPI.get(id).then(res => {
      allBooks.push(res)
    })))
    setBookList(allBooks)
  }
  return (
    <div className="app">
      <div className="open-search">
        <Link to="/search" >Add a book</Link>
      </div>
      <Routing readingStatus={bookList} sendOptionToApp={handleData} />
    </div>
  );
}

export default App;