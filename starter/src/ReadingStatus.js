import React from 'react';
import * as BooksAPI from "./BooksAPI"
import { useState } from 'react';

function ReadingStatus({readingStatus, sendBookList}) {
  let books = readingStatus
  const selectOption = (e)=>{
    const id = e.target.id
    const shelf = e.target.value
    console.log(id, shelf)
    const selectedBook = async (id)=>{
      const res = await BooksAPI.get(id)
      const getUpdatedBook = async (res, shelf)=>{
        const result  = await BooksAPI.update(res, shelf)
        sendBookList(result)
      }
      getUpdatedBook(res, shelf)
    }
    selectedBook(id)
  }


        return (
              <ol className="books-grid">
                {books.map(book => (                 
                <li key={book.id} >
                  <div className="book" >
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage:
                            `url(${book.imageLinks? book.imageLinks.thumbnail:""})`,
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select id={book.id} onChange={(id) =>selectOption(id)} defaultValue={book.shelf}>
                          <option value="none" disabled >
                            {!book.shelf || book.shelf === "none"? "Add to...":"Move to..."}
                          </option>
                          <option value="currentlyReading" >
                          Currently Reading
                          </option>
                          <option value="wantToRead" >Want to Read</option>
                          <option value="read" >Read</option>
                          <option value="none" hidden={!book.shelf || book.shelf === "none"}>None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title?book.title:""}</div>
                    {
                      book['authors']? book['authors'].map(author =>(
                        <div key={Math.random()} className="book-authors">{author}</div>                   
                      )):""
                    }                                       
                  </div>
                </li>
                ))}
            
              </ol>

    
   
        );

}

export default ReadingStatus;