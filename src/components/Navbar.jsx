import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Logo from "../assets/img/bull-removebg-preview.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Markets", href: "#" },
    {
      name: "Company",
      dropdown: ["About Us", "Careers", "Contact"],
    },
    { name: "Education", href: "#" },
    {
      name: "Resources",
      dropdown: ["Blog", "Help Center", "API Docs"],
    },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 border-b border-gray-500/30 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 backdrop-blur-md text-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="logo" className="w-20" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-[14px] text-gray-300">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative group cursor-pointer"
              onMouseEnter={() =>
                link.dropdown ? setDropdownOpen(link.name) : null
              }
              onMouseLeave={() =>
                link.dropdown ? setDropdownOpen(null) : null
              }
            >
              <a
                href={link.href || "#"}
                className="flex items-center gap-1 hover:text-yellow-400"
              >
                {link.name}
                {link.dropdown && (
                  <HiChevronDown
                    className={`transition-transform duration-200 ${
                      dropdownOpen === link.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {/* Dropdown */}
              {link.dropdown && dropdownOpen === link.name && (
                <ul className="absolute top-full mt-3 left-0 bg-white text-black rounded-lg py-3 px-5 min-w-[200px] shadow-xl space-y-2">
                  {link.dropdown.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block text-sm hover:text-yellow-500 transition-colors text-left"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex space-x-4 items-center font-medium">
          {/* Log in */}
          <a
            href="#"
            className="relative flex items-center gap-1 group hover:bg-white/10 px-4 py-2 rounded-lg transition-all"
          >
            <span className="relative">
              Log in
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <BsArrowUpRightCircleFill className="transform transition-transform duration-300 group-hover:rotate-45" />
          </a>

          {/* Sign up */}
          <a
            href="#"
            className="flex items-center gap-1 text-black bg-yellow-500 hover:bg-orange-300 px-4 py-2 rounded-lg transition-all group"
          >
            Sign up
            <BsArrowUpRightCircleFill className="transform transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center text-center bg-black/80 text-white backdrop-blur-lg absolute w-full top-0 left-0 h-screen space-y-6 text-lg">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 text-white"
          >
            <HiX size={30} />
          </button>

          {navLinks.map((link) => (
            <div key={link.name} className="w-full">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === link.name ? null : link.name
                      )
                    }
                    className="flex justify-center items-center gap-1 w-full"
                  >
                    {link.name} <HiChevronDown />
                  </button>
                  {dropdownOpen === link.name && (
                    <ul className="mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a href="#" className="hover:text-yellow-400">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a href={link.href} className="hover:text-yellow-400">
                  {link.name}
                </a>
              )}
            </div>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-3 pt-6">
            <a
              href="#"
              className="flex items-center justify-center gap-1 bg-yellow-500 hover:bg-orange-300 px-4 py-2 rounded-lg"
            >
              Sign up <BsArrowUpRightCircleFill />
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-1 border border-white/40 hover:bg-white/10 px-4 py-2 rounded-lg"
            >
              Log in <BsArrowUpRightCircleFill />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
