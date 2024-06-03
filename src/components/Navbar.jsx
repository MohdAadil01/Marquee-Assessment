import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white px-8">
      <div className="container mx-auto flex justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-widest hover:text-blue-500"
        >
          Search Books
        </Link>
        <Link
          to="/bookshelf"
          className="text-xl font-bold tracking-widest hover:text-blue-500"
        >
          My Bookshelf
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
