import React, { useState } from "react";
import "./all.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(`hamburger-icon ${menuOpen ? "open" : ""}`);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav style={{backgroundColor:"white"}} className="navbar">
     
  <div className="header-left">
    Priyanshi Vastani
  </div>
  <div className="hidden md:flex md:space-x-4 gap-8 list-none text-xl font-light font-poppins">
    <li>
      <button onClick={() => scrollToSection("about")}>About</button>
    </li>
    <li>
      <button onClick={() => scrollToSection("experience")}>
        Experience
      </button>
    </li>
    <li>
      <button onClick={() => scrollToSection("contact")}>
        Contact
      </button>
    </li>
  </div>
  <div className="md:hidden">
    <button className="mobile-menu-button" onClick={toggleMenu}>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>


        {menuOpen && (
          <div className="mobile-menu md:hidden">
            <li>
              <button
                onClick={() => {
                  scrollToSection("about");
                  toggleMenu();
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("experience");
                  toggleMenu();
                }}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  toggleMenu();
                }}
              >
                Contact
              </button>
            </li>
          </div>
        )}
      </nav>
   
    </header>
  );
}

export default Header;
