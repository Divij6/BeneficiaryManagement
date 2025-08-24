import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#2D1F1F] text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold tracking-wide">
        NGO IMPACT
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-1 ${
              isActive ? "font-semibold text-[#E8DCCC]" : "text-gray-300"
            }`
          }
        >
         Dashboard
        </NavLink>

        <NavLink
          to="/beneficiaries"
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#E8DCCC]" : "text-gray-300"
          }
        >
          Beneficiaries
        </NavLink>

        <NavLink
          to="/programs"
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#E8DCCC]" : "text-gray-300"
          }
        >
          Programs
        </NavLink>

        <NavLink
          to="/progress"
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#E8DCCC]" : "text-gray-300"
          }
        >
          Progress
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#E8DCCC]" : "text-gray-300"
          }
        >
           Notifications
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "font-semibold text-[#E8DCCC]" : "text-gray-300"
          }
        >
            Reports
        </NavLink>
      </nav>

      {/* Profile */}
      <div className="text-sm">raghavjha</div>
    </header>
  );
};

export default Header;
