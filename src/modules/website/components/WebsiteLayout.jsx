import React from "react";
import { Link } from "react-router-dom";

const WebsiteLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 py-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl">Project Costing App</h1>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/auth" className="hover:text-gray-200">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>

      <footer className="bg-gray-300 py-4 px-8">
        <p className="text-gray-600 text-sm">
          &copy; 2023 Project Costing App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
