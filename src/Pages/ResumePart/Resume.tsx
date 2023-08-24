import React from "react";
import ResumeMenu from "../../Utils/ResumeMenu";

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <header className="text-center my-3">
          <h1 className="m-0 p-0">Resume</h1>
          <img src={require("../../Assets/seperator.png")} alt="" />
        </header>
        <div className="resume-main">
          <div className="container">
            <ResumeMenu/>
          </div>
        </div>
        <div className="footer-img">

        <img id="left"  src={require("../../Assets/anim5.gif")} alt="" />
        <img id="right" src={require("../../Assets/anim5.gif")} alt="" />
        </div>

      </section>
    </>
  );
};

export default Resume;
