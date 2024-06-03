import React from "react";

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="container mx-auto p-8 bg-[#222831]">
      <h2 className="text-3xl font-semibold mb-4 tracking-widest">
        My Bookshelf
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book) => (
          <div
            key={book.key}
            className="border p-4 rounded-lg shadow-xl w-[100%] bg-[#393E46] tracking-widest"
          >
            <h3 className="text-2xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-100 tracking-widest">
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
