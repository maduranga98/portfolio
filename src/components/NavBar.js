import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      {/* Hamburger Icon */}
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-color3 text-color2 rounded hover:bg-color4"
        onClick={toggleNav}
      >
        <GiHamburgerMenu size={30} />
      </button>

      {/* Full-Screen Navbar */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-color2 text-color3 shadow-lg"
          onClick={() => setIsOpen(false)} // Close menu when clicking outside
        >
          <div
            className="flex items-center justify-center h-full px-10"
            // onClick={(e) => e.stopPropagation()} // Prevent click event from closing menu
          >
            <ul className="flex flex-col space-y-6">
              <li className="flex items-center ">
                <Link
                  to="/"
                  className="flex items-center text-gray-700 hover:underline text-2xl"
                >
                  <FaHome className="mr-4" size={24} /> Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/about"
                  className="flex items-center text-gray-700 hover:underline text-2xl"
                >
                  <FaUser className="mr-4" size={24} /> About
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/skills"
                  className="flex items-center text-gray-700 hover:underline text-2xl"
                >
                  <FaCog className="mr-4" size={24} /> Skills
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/projects"
                  className="flex items-center text-gray-700 hover:underline text-2xl"
                >
                  <FaProjectDiagram className="mr-4" size={24} /> Projects
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/contacts"
                  className="flex items-center text-gray-700 hover:underline text-2xl"
                >
                  <FaEnvelope className="mr-4" size={24} /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
