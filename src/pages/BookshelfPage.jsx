import React, { useState, useEffect } from "react";
import Bookshelf from "../components/Bookshelf";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBookshelf);
  }, []);

  return (
    <div className="bg-[#393E46] text-[#EEEEEE]">
      <Bookshelf bookshelf={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
