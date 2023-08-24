import React from "react";
import Slider from "react-slick";

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  if (window.innerWidth <= 1400) {
    settings.slidesToShow = 2;
  }
  if (window.innerWidth <= 1010) {
    settings.slidesToShow = 1;
  }
  return (
    <Slider {...settings}>
      <div className="box">
        <div className="in-box" >
          <div className="monitor-out">
            <img
              className="monitor"
              src={require("../Assets/monitor.png")}
              alt=""
            />
            <div className="project-img">
              <img src={require("../Assets/project1A.png")} alt="" />
              <img src={require("../Assets/project1B.png")} alt="" />
              <img src={require("../Assets/project1C.png")} alt="" />
              <img src={require("../Assets/project1D.png")} alt="" />
            </div>
          </div>
          <div className="project-desc">
            <img src={require("../Assets/seperator2.png")} alt="" />
            <h3>Mebal.az </h3>
            <p>
              The Furniture Marketplace Web Application is a dynamic and
              innovative platform that facilitates the exchange of new and
              pre-owned furniture. Serving as a bridge between individuals and
              furniture stores, this application provides a user-friendly
              environment for users to post, discover, and connect with
              furniture listings. The primary focus of the project is to
              streamline the process of buying and selling furniture through
              detailed advertisements and advanced search functionalities.
            </p>
            <h6>
              Tech Stack: C# ASP .Net, Javascript, Jquery, Ajax, HTML, CSS,
              Sass, Bootstrap{" "}
            </h6>
            <a href="https://github.com/Maga002/Mebal.az">
              Source Code &#8594;
            </a>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="in-box">
          <div className="monitor-out">
            <img
              className="monitor"
              src={require("../Assets/monitor.png")}
              alt=""
            />
            <div className="project-img">
              <img src={require("../Assets/project2B.png")} alt="" />
              <img src={require("../Assets/project2C.png")} alt="" />
              <img src={require("../Assets/project2D.png")} alt="" />
              <img src={require("../Assets/project2E.png")} alt="" />
              <img src={require("../Assets/project2F.png")} alt="" />
              <img src={require("../Assets/project2G.png")} alt="" />
            </div>
          </div>
          <div className="project-desc">
            <img src={require("../Assets/seperator2.png")} alt="" />
            <h3>Handcraft</h3>
            <p>
              "Handcraft" stands reborn as a robust e-commerce platform,
              reshaping the way users shop. The latest advancements encompass
              sophisticated search capabilities, amplified admin management,
              secure payment gateways, and an engaging user review ecosystem.
              Through this project, I've showcased my commitment to enhancing
              digital experiences, culminating in a revitalized "Handcraft" that
              caters to both sellers and shoppers, fostering a dynamic
              marketplace environment.
            </p>
            <h6>
              Tech Stack: Java, Spring, Javascript, Typescript, React, Redux,
              PostgreSQL, Stripe API
            </h6>
            <a href="https://github.com/Maga002/handcraft">
              Source Code &#8594;
            </a>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="in-box">
          <div className="monitor-out">
            <img
              className="monitor"
              src={require("../Assets/monitor.png")}
              alt=""
            />
            <div className="project-img">
              <img src={require("../Assets/project3A.png")} alt="" />
              <img src={require("../Assets/project3B.png")} alt="" />
              <img src={require("../Assets/project3C.png")} alt="" />
              <img src={require("../Assets/project3D.png")} alt="" />
              <img src={require("../Assets/project3E.png")} alt="" />
            </div>
          </div>
          <div className="project-desc">
            <img src={require("../Assets/seperator2.png")} alt="" />
            <h3>CrowdCoin </h3>
            <p>
              This project delved into designing and implementing a
              decentralized application leverages blockchain technology to
              establish a secure environment for authentication and
              authorization. Employing a combination of qualitative and
              quantitative research, the dApp allows users to initiate
              campaigns, fostering collaboration and contributions. Metamask
              ensures secure transaction management, validating users and
              granting access permissions. The project showcases the potential
              of blockchain in enhancing security, decentralization, and
              emphasizing both technical prowess and real-world application.
            </p>
            <h6>
              Tech Stack: Solidity, Javascript, Next.Js, React.Js, Web3, Mocha,
              Ganache, Metamask
            </h6>
            <a href="https://github.com/Maga002/CrowdCoin">
              Source Code &#8594;
            </a>
          </div>
        </div>
      </div>{" "}
      <div className="box">
        <div className="in-box">
        <div className="monitor-out">
          <img
            className="monitor"
            src={require("../Assets/monitor.png")}
            alt=""
          />
          <div className="project-img">
            <img src={require("../Assets/project4A.png")} alt="" />
            <img src={require("../Assets/project4B.png")} alt="" />
            <img src={require("../Assets/project4C.png")} alt="" />
            <img src={require("../Assets/project4D.png")} alt="" />
            <img src={require("../Assets/project4E.png")} alt="" />
            <img src={require("../Assets/project4F.png")} alt="" />
            <img src={require("../Assets/project4G.png")} alt="" />
          </div>
          </div>
          <div className="project-desc">
            <img src={require("../Assets/seperator2.png")} alt="" />
            <h3>BookLover</h3>
            <p>
              The BookLover application combines the power of Java and React: a
              responsive platform designed to revolutionize the way users
              interact with books. With this application, users can effortlessly
              explore a vast collection of books, search by title or category,
              and dive into the world of literature. The intuitive checkout
              system enables users to easily borrow books, manage their
              checked-out items, and even renew the checkout period when needed.
              Moreover, reviews are prominently displayed on each book's details
              page, creating an engaging and insightful environment for fellow
              bookworms.
            </p>
            <h6>
              Tech Stack: Java Spring Boot, ReactJS, Typescript, PostgreSQL,
              Postman, Okta, OAuth2, OpenSSL, HTML, CSS, Bootstrap.
            </h6>
            <a href="https://github.com/Maga002/Library-App">
              Source Code &#8594;
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default SimpleSlider;
