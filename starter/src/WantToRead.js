import React from 'react';
import ReadingStatus from './ReadingStatus';

function WantToRead({readingStatus,sendOptionToApp}) {
    const wantToRead = readingStatus.filter(book => book.shelf === "wantToRead")
    const bookList = (data) => {
        sendOptionToApp(data)
    }
    return (
        <div>
            <div  className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
                {
                    wantToRead.length>0?(<ReadingStatus readingStatus={wantToRead} sendBookList={bookList}/>):""
                }
        
            </div>
            </div>
        </div>
    );
}

export default WantToRead;