import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">NGO Portal</h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-300 transition">
              Home
            </a>
          </li>
          <li>
            <a
              href="#beneficiaries"
              className="hover:text-yellow-300 transition"
            >
              Beneficiaries
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-300 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href=""
          className="hidden md:inline-block px-5 py-2 bg-yellow-400 text-gray-900 rounded-2xl font-semibold shadow hover:bg-yellow-300 transition"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
