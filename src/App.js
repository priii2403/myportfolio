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
import resumePDF from "../src/assets/resume.pdf";

function handleDownloadCV() {
  window.open(resumePDF);
}
function redirectToLinkedIn() {
  window.location.href = "https://www.linkedin.com/feed/";
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
        <section id="profile">
          <div className="section__pic-container">
            <img
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="rounded-image"
            />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Priyanshi Vastani</h1>
            <p className="section__text__p2">Software Developer</p>
            <div className="btn-container">
              <button className="btn btn-color-2" onClick={handleDownloadCV}>
                Download CV
              </button>
              <button
                className="btn btn-color-1"
                onClick={() => (window.location.href = "./#contact")}
              >
                Contact Info
              </button>
            </div>
            <div id="socials-container">
              <img
                src={linkedin}
                alt="My LinkedIn profile"
                className="icon"
                onClick={redirectToLinkedIn}
              />

              <img
                src={whatsApp}
                alt=""
                className="icon"
                onClick={navigateToWhatsApp}
              />
            </div>
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic-container">
              <img
                src="https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="about-pic"
              />
            </div>
            <div className="about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <img
               
                    src={Experience}
                    alt="Experience"
                    className="icon-tag"
                  />
                  <h3>Experience</h3>
                  <p>
                    "2.5+ years "
                    <br />
                    "Software Developer"
                  </p>
                </div>
                <div className="details-container">
                  <img
                    
                    src={Education}
                    alt=""
                    className="icon-tag"
                  />
                  <h3>Education</h3>
                  <p>Bachelor- B.Tech(BE)</p>
                  <p>Information Technology</p>
                </div>
              </div>
              <div className="text-container">
                <p>
                  As a Developer Developed front-end UI using
                  <b>React Native</b>,<b>Flutter</b>, and
                  <b>JavaScript</b>
                  for cross-platform iOS and Android apps. Employed React Native
                  debugging tools like
                  <b>ShakeBug</b>
                  for bug detection and resolution. Successfully integrated
                  features like camera module, push notifications, and social
                  media login. Managed production and deployment on iOS,
                  leveraging CLI for App Store submission
                </p>
              </div>
            </div>
          </div>
          <img src={Arrow} alt="" className="icon arrow" />
        </section>
        <section id="experience" >
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h2 className="experience-sub-title">Data analysis</h2>
                <div className="article-container">
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>React Native</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>ReactJS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>NextJs</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>TypeScript</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>Firebase</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="details-container">
                <h2 className="experience-sub-title">others</h2>
                <div className="article-container">
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>MongoDb</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>Sql</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>NodeJs</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>Redux</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>Flutter</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={CheckMark} alt="" className="icon" />
                    <div>
                      <h3>AWS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <img src={Arrow} alt="" className="icon arrow" />
        </section>

        <section id="contact">
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
                <a href="https://www.linkedin.com/feed/">LinkedIn</a>
              </p>
            </div>
          </div>
        </section>

        <footer>
          <nav></nav>
          <p>Copyright &#169; 2023 Priyanshi Vastani. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
