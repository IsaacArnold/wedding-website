import React from "react";
import { Link } from "gatsby";
import { FiMenu } from "react-icons/fi";

const Navigation = () => {
  const handleClick = () => {
    // Toggle the hidden class
    document.getElementById("dropdown").classList.toggle("hidden");
    document.getElementById("dropdown").classList.toggle("block");
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-dark-bg p-6">
      <div>
        <Link
          to="/"
          className="flex items-center flex-shrink-0 text-weddingGreen mr-6"
        >
          <span className="font-Aurella text-3xl tracking-tight">
            Isaac & Vanessa
          </span>
        </Link>
      </div>
      <div className="block lg:hidden" onClick={handleClick}>
        <button className="flex items-center px-3 py-2">
          <FiMenu className="w-6 h-8 text-weddingGreen" />
        </button>
      </div>
      <div
        className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto lg:flex-grow-0"
        id="dropdown"
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Nothing
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            In
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Here!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
