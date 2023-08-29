import React, { useEffect, useRef, useState } from 'react';
import * as BooksAPI from "./BooksAPI"
import ReadingStatus from './ReadingStatus';
import {Link} from "react-router-dom"

function SearchResults({func,sendOptionToApp, readingStatus}) {
    const [books, setBooks] = useState('')
    const classifiedBook = readingStatus
    console.log("classifiedBook",classifiedBook)
    const searchBook = async(e) =>{
      const res = await BooksAPI.search(e.target.value)
      for(let i =0 ; i<classifiedBook.length;i++){
        for(let j = 0; j<res.length; j++){
          if(classifiedBook[i].id === res[j].id){
            res[j]['shelf'] = classifiedBook[i]['shelf']
          }
        }
      }
      console.log("res",res)
        if(res ){
          if(!res.items){
            setBooks(res)

          }else{
            setBooks('')
          }
        }else{
          setBooks('')
        }
    }
    const handleOptions = (data)=>{
      sendOptionToApp(data)

    }
    const displayPage =(e)=>{
      func(false)

    }
    return (
        <div>
                 <div className="search-books">
          <div className="search-books-bar">
            <Link to ="/"
              className="close-search"
              onClick={displayPage}
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(e) => searchBook(e)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <div className="books-grid">
                {books.length > 0 ?
                  (<ReadingStatus readingStatus={books} sendBookList={handleOptions}/>):""
                }
            </div>
          </div>
        </div>
        </div>
    );
}

export default SearchResults;