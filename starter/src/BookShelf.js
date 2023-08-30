import React from 'react';
import ReadingStatus from './ReadingStatus';

function BookShelf({ readingStatus, sendOptionToApp }) {
    const currentlyReading = readingStatus.filter(book => book.shelf === "currentlyReading")
    const wantToRead = readingStatus.filter(book => book.shelf === "wantToRead")
    const read = readingStatus.filter(book => book.shelf === "read")
    const bookList = (data) => {
        sendOptionToApp(data)
    }
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currenly Reading</h2>
                        <div className="bookshelf-books">
                            {
                                currentlyReading.length > 0 ? (<ReadingStatus readingStatus={currentlyReading} sendBookList={bookList} />) : ""
                            }
                        </div>
                        <h2 className="bookshelf-title">Want To Read</h2>
                        <div className="bookshelf-books">
                            {
                                wantToRead.length > 0 ? (<ReadingStatus readingStatus={wantToRead} sendBookList={bookList} />) : ""
                            }
                        </div>
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            {
                                read.length > 0 ? (<ReadingStatus readingStatus={read} sendBookList={bookList} />) : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookShelf;