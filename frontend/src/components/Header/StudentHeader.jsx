import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const StudentHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/"); 
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">NGO Portal</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <NavLink
              to="home"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="student/contact"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="hidden md:flex items-center gap-x-4">
          <button
            onClick={handleLogout}
            className="px-5 py-2 border-2 border-yellow-400 bg-yellow-300 text-gray-900 rounded-2xl font-semibold shadow hover:bg-yellow-400 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StudentHeader;
