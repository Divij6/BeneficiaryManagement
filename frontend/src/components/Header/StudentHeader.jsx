import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import  useAuth  from "../../context/useAuth.js"; 

const StudentHeader = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">NGO Portal</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <NavLink
              to="/dashboard"
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
              to="/events"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              My Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>

        {/* User Info + Logout */}
        <div className="hidden md:flex items-center gap-x-4">
          <span className="font-semibold text-yellow-300">
            Hi, {user?.name || "Student"}
          </span>
          <button
            onClick={handleLogout}
            className="px-5 py-2 border-2 border-yellow-400 bg-white text-gray-900 rounded-2xl font-semibold shadow hover:bg-yellow-300 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StudentHeader;
