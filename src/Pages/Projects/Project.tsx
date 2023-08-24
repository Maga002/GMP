import React from "react";
import SimpleSlider from "../../Utils/SimpleSlider";

const Project = () => {
  return (
    <>
      <section id="project" className="projects">
        <header className="text-center">
          <h1 className="m-0">Projects</h1>
          <img src={require("../../Assets/seperator.png")} alt="" />
        </header>
        <div className="slider-main">
          <div className="container">
            <div className="slider-component">
              <SimpleSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
