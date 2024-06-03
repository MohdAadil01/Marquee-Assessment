import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BookSearch = ({ addToBookshelf }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchDefaultBooks = async () => {
      const response = await axios.get(
        "https://openlibrary.org/search.json?q=book&limit=10&page=1"
      );
      setBooks(response.data.docs);
    };
    fetchDefaultBooks();
  }, []);

  const handleSearch = async (e) => {
    const q = e.target.value;
    setQuery(q);
    setFilteredBooks(
      books.filter((book) => book.title.toLowerCase().includes(q.toLowerCase()))
    );
  };

  const displayBooks = query ? filteredBooks : books;

  return (
    <div className="container mx-auto p-8 bg-[#222831]">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books..."
        className="w-full p-2 mb-4 border rounded text-gray-900 "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[100%]">
        {displayBooks.map((book, index) => (
          <BookCard key={index} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
