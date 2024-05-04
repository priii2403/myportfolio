import React from "react";
import './all.css'
function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="header-left">Priyanshi Vastani</div>
      <nav>
        <ul>
          <li><button  onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("experience")}>Experience</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
