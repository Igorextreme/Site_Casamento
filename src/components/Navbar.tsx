
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Confirmar Presença", path: "/rsvp" },
    { name: "Lista de Presentes", path: "/gifts" },
    { name: "Manual do Convidado", path: "/guidelines" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="wedding-container flex justify-between items-center">
        <Link to="/" className="font-dancing text-2xl font-bold text-wedding-green">
          Igor & Nicole
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-wedding-green"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                location.pathname === link.path ? "nav-link-active" : "nav-link"
              } font-medium text-lg`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-3 px-4 bg-white animate-fade-in border-t">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path ? "nav-link-active" : "nav-link"
                } text-lg py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
