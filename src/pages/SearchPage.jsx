import React, { useState, useEffect } from "react";
import BookSearch from "../components/BookSearch";

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="bg-[#222831] text-[#EEEEEE]">
      <BookSearch addToBookshelf={addToBookshelf} />
    </div>
  );
};

export default SearchPage;
