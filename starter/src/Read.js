import React from 'react';
import ReadingStatus from './ReadingStatus';

function Read({readingStatus,sendOptionToApp}) {
    const read = readingStatus.filter(book => book.shelf === "read")
    const bookList = (data) => {
        sendOptionToApp(data)
    }
    return (
        <div>
            <div  className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                {
                    read.length>0?( <ReadingStatus readingStatus={read} sendBookList={bookList}/>):""
                }
           
            </div>
            </div>
        </div>
    );
}

export default Read;