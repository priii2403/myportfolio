import React from "react";
import Header from "./Component/Header";
import "./App.css";
import linkedin from "../src/assets/linkedin.png";
import whatsApp from "../src/assets/wp1.png";
import Experience from "../src/assets/experience.png";
import Arrow from "../src/assets/arrow.png";
import CheckMark from "../src/assets/checkmark.png";
import Education from "../src/assets/education.png";
import EmailIcon from "../src/assets/email.png";
import resumePDF from '../src/assets/resume.pdf';

function handleDownloadCV() {
  window.open(resumePDF);
}
function redirectToLinkedIn() {
  window.location.href = 'https://www.linkedin.com/feed/';
}
const navigateToWhatsApp = () => {
  const phoneNumber = "917265079745";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.location.href = whatsappUrl;
};
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="about" className="full-screen-section center-content ">
          <div className="about-content">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
              />
            </div>
            <div className="section__text">
              <p className="section__text__p1">Hello, I'm</p>
              <h1 className="title">Priyanshi Vastani</h1>
              <p className="section__text__p2">Software Developer</p>
              <div className="btn-container">
              <button className="btn btn-color-2" onClick={handleDownloadCV}>Download CV</button>
              <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
  Contact Info
</button>
              </div>
              <div id="socials-container">
              <img src={linkedin} alt="My LinkedIn profile" className="icon" onClick={redirectToLinkedIn} />
           
                <img src={whatsApp} alt="" className="icon" onClick={navigateToWhatsApp}/>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="full-screen-section  ">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic-container">
              <img src='https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className="about-pic" />
            </div>
            <div className="about-details-container">
              <div  className="about-containers">
                <div  className="details-container">
                  <img  style={{marginLeft:'140px'}}src={Experience} alt="Experience" className="icon" />
                  <h3 >Experience</h3>
                  <p>
                    "1.5+ years "
                    <br />
                    "Data Analyst"
                  </p>
                </div>
                <div className="details-container">
                  <img  style={{marginLeft:'0px'}} src={Education} alt="" className="icon" />
                  <h3>Education</h3>
                  <p>Bachelor- B.Tech(BE)"</p>
                </div>
              </div>
              <div className="text-container">
                <p>
                  "As a student"
                  <b> Data Analyst</b>
                  at OD-OS GmbH, I contribute to medical device innovation while
                  pursuing an M.Sc. in Artificial Intelligence at Brandenburg
                  Technical University(BTU- Cottbus) in Germany. With a B.Tech.
                  in
                  <b>Computer Engineering</b>
                  and extensive online coursework, I excel in
                  <b>Data Analysis</b>,<b>Visualization</b>,
                  <b>Cloud computing</b>. Previous internships and experiences
                  in corporate world at TWDI Infotech honed my skills in AWS,
                  Python, and Data Engineering. Additionally, those experiences
                  carved my skills in tools like Power BI and Tableau, I'm
                  fluent in English and German, passionate about leveraging Data
                  and AI for real-world impact.
                </p>
              </div>
            </div>
          </div>
          <img src={Arrow} alt="" className="icon arrow" />
        </section>
        <section id="experience" className="full-screen-section">
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>

          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h2 className="experience-sub-title">Data analysis</h2>
                <div className="article-container">
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <h3>PowerBI</h3>
                    <p>Experienced</p>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <h3>Tableau</h3>
                    <p>Experienced</p>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <h3>Python</h3>
                    <p>Experienced</p>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <h3>AI</h3>
                    <p>Experienced</p>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <h3>ML</h3>
                    <p>Experienced</p>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <h3>Sci-kit learn</h3>
                    <p>Experienced</p>
                  </article>
                </div>
              </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Data analysis</h2>
              <div className="article-container">
                <article>
                  <img src={CheckMark} alt="" className="icon" />
                  <h3>PowerBI</h3>
                  <p>Experienced</p>
                </article>
                <article>
                  <img src={CheckMark} alt="" className="icon" />
                  <h3>Tableau</h3>
                  <p>Experienced</p>
                </article>
                <article>
                  <img src={CheckMark} alt="" className="icon" />
                  <h3>Python</h3>
                  <p>Experienced</p>
                </article>
                <article>
                  <img src={CheckMark} alt="" className="icon" />
                  <h3>AI</h3>
                  <p>Experienced</p>
                </article>
                <article>
                  <img src={CheckMark} alt="" className="icon" />
                  <h3>ML</h3>
                  <p>Experienced</p>
                </article>
                <article>
                  <img src={CheckMark} alt="" className="icon" />
                  <h3>Sci-kit learn</h3>
                  <p>Experienced</p>
                </article>
              </div>
            </div>
            </div>
          </div>

          <img src={Arrow} alt="" className="icon arrow" />
        </section>

        <section id="contact" className="full-screen-section">
          <p className="section__text__p1"> Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src={EmailIcon}
                alt=""
                className="icon contact-icon email-icon"
              />
              <p>
                <a href="mailto:vastanipriyanshi24@gmail.com">
                vastanipriyanshi24@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-info-container">
              <img src={linkedin} alt="" className="icon contact-icon" />
              <p>
                <a href="https://www.linkedin.com/feed/">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>

        <footer>
          {/* <script src="script.js"></script>
          <script src="script.js"></script> */}
          <nav></nav>
          <p >Copyright © 2023 Ayushi Bhungaliya. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
