import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookCard = ({ book, addToBookshelf }) => {
  const handleClick = () => {
    addToBookshelf(book);
    toast.success("Book added to bookshelf!");
  };
  return (
    <div className="border p-4 rounded-lg shadow-xl w-[100%] bg-[#393E46]">
      <h3 className="text-2xl font-semibold mb-2 tracking-widest">
        {book.title}
      </h3>
      <p className="text-gray-100 mb-4 tracking-widest">
        {book.author_name ? book.author_name[0] : "Unknown Author"}
      </p>
      <button
        onClick={handleClick}
        className="bg-[#00ADB5] text-white py-2 px-4 rounded hover:bg-blue-600 uppercase tracking-wide"
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
