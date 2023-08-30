import React from "react";
import SearchResults from "./SearchResults";
import BookShelf from "./BookShelf";
import { Routes, Route } from "react-router-dom";

function Routing({ readingStatus, sendOptionToApp }) {
    const bookList = readingStatus
    const handleData = sendOptionToApp
    return (
        <Routes>
            <Route path="/search" element={<SearchResults readingStatus={bookList} sendOptionToApp={handleData} />} />
            <Route path="/" element={<BookShelf readingStatus={bookList} sendOptionToApp={handleData} />} />
        </Routes>
    );
}

export default Routing;

