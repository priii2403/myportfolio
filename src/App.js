import React from "react";
import Header from "./Component/Header";
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
      <section id="about" className="full-screen-section center-content ">
  <div className="about-content">
    <div className="image-container">
      <img src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
    </div>
    <div className="section__text">
    
      <p className="section__text__p1">Hello, I'm</p>

      <h1 className="title">Priyanshi Vastani</h1>
      <p className="section__text__p2">Software Developer</p>
      <div className="btn-container">

      <button className={"btn btn-color-2"}>Download CV</button>
      <button className={'btn btn-color-1'}>Contact Info</button>
      </div>

    </div>
  </div>
</section>


        <section id="projects" className="full-screen-section">
          <h2>Projects</h2>
          <p>This is where you'd display your projects.</p>
        </section>

        <section id="contact" className="full-screen-section">
          <h2>Contact</h2>
          <p>This is where you'd put your contact information.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
