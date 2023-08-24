import React, { useState } from "react";
const ResumeMenu = () => {
  const [isVisible, setIsVisible] = useState("edu");

  const handleVisibility = (e: string) => {
    setIsVisible(e);
  };

  return (
    <>
      <div className="resume-menu">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <ul className="resume-icons">
                <li
                  className={isVisible === "edu" ? "action" : ""}
                  onClick={() => handleVisibility("edu")}
                >
                  <img src={require("../../src/Assets/education.png")} alt="" />
                  <span></span>
                  <p>Education</p>
                </li>
                <li
                  className={isVisible === "ex" ? "action" : ""}
                  onClick={() => handleVisibility("ex")}
                >
                  <img
                    src={require("../../src/Assets/experience.png")}
                    alt=""
                  />{" "}
                  <span></span>
                  <p>Work Experience</p>
                </li>
                <li
                  className={isVisible === "prog" ? "action" : ""}
                  onClick={() => handleVisibility("prog")}
                >
                  <img src={require("../../src/Assets/coding.png")} alt="" />{" "}
                  <span></span>
                  <p>Programming Skills</p>
                </li>
              </ul>
            </div>
            <div className="col-1 d-flex justify-content-center p-0">
              <div className="line d-md-none d-lg-block d-sm-none d-none"></div>
            </div>
            <div className="col-12 col-lg-7 p-0">
              <div className="resume-content-text">
                <ul>
                  <li className={isVisible === "edu" ? "show-li" : ""}>
                    <div className="main-text ">
                      <p className="d-flex align-items-center">
                        <div className="circle"></div>Eötvös Loránd University
                      </p>
                      <p className="date-edu">2021-2023</p>
                    </div>
                    <p className="">Master of Science in Computer Science - Software and Service Architecture</p>
                    <p className="small">*Nominated for Stipendium Hungaricum</p>

                    <div className="main-text mt-5">
                      <p className="d-flex align-items-center">
                        <div className="circle"></div>Azerbaijan State Oil and
                        Industry University
                      </p>
                      <p className="date-edu">2017-2021</p>
                    </div>
                    <p>Bachelor of Science in Computer Science</p>
                    <p className="small">*Nominated for State‑ordered Education</p>

                  </li>
                  <li
                    style={{ overflowY: "scroll", padding: "15px 20px" }}
                    className={isVisible === "ex" ? "show-li" : ""}
                  >
                    <div className="main-text">
                      <p className="mb-2">Software Developer</p>
                      <p className="date-edu">Nov 2021- Sep 2022</p>
                    </div>
                    <p className="experience-text" style={{ lineHeight: "35px" }}>
                      •Successfully delivered multiple high‑quality projects.{" "}
                      <br />
                      •Designed and implemented efficient REST APIs using Java
                      and Spring for seamless integration with other
                      applications and improved system performance. <br />
                      • Streamlined deployment processes by designing and
                      implementing Docker containers for significant time and
                      cost savings. <br />• Technical Skills: Java,Spring,
                      JavaScript, TypeScript, React, Redux, REST API, Docker,
                      PostgreSQL, MongoDB, Git, Postman
                    </p>
                    <div className="main-text pt-2">
                      <p className="mb-2">Full-Stack Developer</p>
                      <p className="date-edu">Dec 2020- Aug 2021</p>
                    </div>
                    <p className="experience-text" style={{ lineHeight: "35px" }}>
                      • Developed and tested applications and product features.{" "}
                      <br />
                      • Performed testing and optimized products, resulting in
                      improved performance. <br />
                      • Identified and resolved web, application, and product
                      errors reported by clients and made improvements. <br />
                      • Technical Skills: C# ASP .Net, MsSQL, JavaScript, React,
                      Jquery, HTML, CSS,Linux tools, Git. <br />{" "}
                    </p>
                  </li>
                  <li id="skills" className={isVisible === "prog" ? "show-li" : ""}>
                    <div className="row">
                      <div className="col-4 ">
                        <label className="main-skill">Front-End</label>
                        <p><img src={require("../Assets/circle.png")} alt="" />Javascript</p>
                        <p><img src={require("../Assets/circle.png")} alt="" />Typescript</p>
                        <p><img src={require("../Assets/circle.png")} alt="" />React</p>
                        <p><img src={require("../Assets/circle.png")} alt="" />Redux</p>
                        <p><img src={require("../Assets/circle.png")} alt="" />Jquery</p>
                        <p><img src={require("../Assets/circle.png")} alt="" />Mockito</p>
                        <p><img src={require("../Assets/circle.png")} alt="" />HTML</p>
                        <p><img src={require("../Assets/circle.png")} alt="" />CSS/Sass</p>
                      </div>
                      <div className="col-4 ">
                        <label className="main-skill">Back-End</label>
                        <p><img src={require("../Assets/circle2.png")} alt="" />Java</p>
                        <p><img src={require("../Assets/circle2.png")} alt="" />Spring</p>
                        <p><img src={require("../Assets/circle2.png")} alt="" />Docker</p>
                        <p><img src={require("../Assets/circle2.png")} alt="" />REST API</p>
                        <p><img src={require("../Assets/circle2.png")} alt="" />SQL/NoSQL</p>
                        <p><img src={require("../Assets/circle2.png")} alt="" />PostgreSQL</p>
                        <p><img src={require("../Assets/circle2.png")} alt="" />MongoDB</p>
                        <p><img src={require("../Assets/circle2.png")} alt="" />JUnit</p>
                      </div>
                      <div className="col-4 ">
                        <label className="main-skill">Tool/Software</label>
                        <p ><img src={require("../Assets/circle.png")} alt="" />Linux</p>
                        <p ><img src={require("../Assets/circle.png")} alt="" />Git/Github</p>
                        <p ><img src={require("../Assets/circle.png")} alt="" />Intellij</p>
                        <p ><img src={require("../Assets/circle.png")} alt="" />Postman</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeMenu;
