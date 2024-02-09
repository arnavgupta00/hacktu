import React, { useState, useEffect } from "react";
import {
  storeObject,
  exportObject,
} from "../../components/variableSet/variableSet.jsx";
import Logo from "../../assets/Logo.png";
import Carousel from "../../components/carousel/carousel.jsx";
import "./home.css";

export const Home = () => {
  const [obj, setObj] = useState({});
  useEffect(() => {
    setObj(exportObject());
  }, []);
  return (
    <>
      <div className="homePage">
        <div className="headingCumLogo">
          <div className="headingCumLogoLogo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="headingCumLogoHeading">
            <h1>Hi, {obj.userName}</h1>
          </div>
        </div>
        <div className="mainBanner">
          <div className="mainBannerHeading">
            <h1>Continue Where You Left</h1>
          </div>
          <div className="mainBannerImage"></div>
        </div>
        <div className="homeCorusel">
          <div className="homeCoruselHeading">
            <h1>Let's Learn!!</h1>
          </div>
          <div className="homeCoruselCaruuu">
            <Carousel
              borderRadii="20px"
              marginTop="100px"
              height="250px"
              width="90vw"
              autoPlay="false"
              list={["https://i.imgur.com/HuRYP0f.png"]}
            />
          </div>
        </div>
        <div className="quizzes">
            <div className="quizzesHeading">
                <h1>Quizzes</h1>
            </div>
            <div className="quizzesItems">
                <div className="quizzesItem"></div>
                <div className="quizzesItem"></div>
                <div className="quizzesItem"></div>
                <div className="quizzesItem"></div>
            </div>
            
        </div>
      </div>
    </>
  );
};
