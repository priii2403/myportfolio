import React from "react";
import Header from "./Component/Header";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>This is where you'd write about yourself.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>This is where you'd display your projects.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>This is where you'd put your contact information.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
