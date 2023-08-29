import React from 'react';
import ReadingStatus from './ReadingStatus';

function CurentlyReading({readingStatus, sendOptionToApp}) {
    const currentlyReading = readingStatus.filter(book => book.shelf === "currentlyReading")
    console.log("currenlyReading",currentlyReading)
    const bookList = (data) => {
        sendOptionToApp(data)
    }
 
    return (
        <div>
            <div  className="bookshelf">
            <h2 className="bookshelf-title">Currenly Reading</h2>
            <div className="bookshelf-books">
                {
                    currentlyReading.length >0 ?( <ReadingStatus readingStatus={currentlyReading} sendBookList={bookList} />):""
                }
            </div>
            </div>
        </div>
    );
}

export default CurentlyReading;