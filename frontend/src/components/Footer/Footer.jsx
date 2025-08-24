import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">NGO Portal</h2>
          <p className="text-gray-200">
            Empowering communities by managing beneficiaries, events, and
            resources.
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/beneficiaries"
                className="hover:text-yellow-300 transition"
              >
                Beneficiaries
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: info@ngoportal.org</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Pune, India</p>
        </div>
      </div>

      
      <div className="border-t border-blue-500 mt-8 pt-4 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} NGO Portal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
