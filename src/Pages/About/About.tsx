import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <header className="text-center my-5">
          <h1 className="m-0">About Me</h1>
          <img src={require("../../Assets/seperator.png")} alt="" />
        </header>
        <div className="about-main">
          <div className="container">
            <div className="card p-0">
              <div className="row">
                <div className="col-12 col-lg-5 ">
                  <img src={require("../../Assets/prof1.jpg")} alt="" />
                </div>
                <div className="col-12 col-lg-7 px-2">
                  <div className="about-text">
                    <p className="px-2 text-center">
                      <span className="px-2 "></span>Greetings! I'm a passionate
                      and versatile Full Stack Developer with a knack for
                      turning ideas into functional, user-centric applications.
                      With a rich background in both software development and
                      computer science education, I am driven by innovation and
                      dedicated to crafting high-quality solutions that make a
                      positive impact. My journey so far has taken me across
                      different projects, roles, and technologies, shaping me
                      into the well-rounded developer I am today.
                      <br />
                      <br />
                      <span>Here Are a Few Highlights:</span>
                    </p>
                    <ul>
                      <li>
                        <img src={require("../../Assets/circle2.png")} />
                        Frontend Development
                      </li>
                      <li>
                        <img src={require("../../Assets/circle.png")} />
                        Backend Development
                      </li>
                      <li>
                        <img src={require("../../Assets/circle2.png")} />
                        Building REST API
                      </li>
                      <li>
                        <img src={require("../../Assets/circle.png")} />
                        Providing Secured Applications
                      </li>
                      <li>
                        <img src={require("../../Assets/circle2.png")} />
                        Managing Database Relations
                      </li>
                      <li>
                        <img src={require("../../Assets/circle.png")} />
                        Containerization in Docker
                      </li>
                    </ul>
                  </div>

                  <div className="about-buttons">
                    <a
                      className="download-resume"
                      href="resume.pdf"
                      download="MahammadGulalovResume.pdf"
                    >
                      Get my Resume
                    </a>
                    <Link to="contact">Contact me</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot"></div>
      </section>
    </>
  );
};

export default About;
