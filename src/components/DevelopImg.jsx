import React, { useEffect } from "react";
import Frame from "../assets/PoliroidFrame.png";
import Shred from "../assets/ShredNStyle.png";
import Harry from "../assets/HPFP.png";
import Ecom from "../assets/ecomBackend.png";
import Emp from "../assets/EmpLineCom.png";
import Logo from "../assets/Logo.png";
import Weather from "../assets/Weather.png";
import "../styles/Develop.css";


function DevelopImg() {
  useEffect(() => {
    const imageSets = document.querySelectorAll(".developImgs");

    imageSets.forEach((imageSet) => {
      const fillImg = imageSet.querySelector(".fillImg");

      imageSet.addEventListener("mouseenter", () => {
        fillImg.style.filter = "grayscale(0%) brightness(100%)";
      });

      // imageSet.addEventListener("mouseleave", () => {
      //   fillImg.style.filter = "grayscale(100%) brightness(0%)";
      // });

      imageSet.addEventListener("mousedown", () => {
        fillImg.style.filter = "blur(5px)";
      });

      imageSet.addEventListener("mouseup", () => {
        fillImg.style.filter = "blur(0px)";
      });
    });
  }, []);

  return (
    <>
      <div id="devPage">
        <div>
          <h1>Hover Over Image To View Projects</h1>
        </div>
        <div id="devBod">
          <div className="developImgs">
            <a href="https://github.com/nlad218/ShredNStyle" target="_blank">
              <h2>Shred'N Styles</h2>
              <img className="fillImg" src={Shred} alt="Shred Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
              <div></div>
            </a>
          </div>
          <div className="developImgs">
            <a
              href="https://github.com/nfillip/harrypotter-fanpage"
              target="_blank"
            >
              <h2>Fan Page</h2>
              <img className="fillImg" src={Harry} alt="Harry Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
            </a>
          </div>
          <div className="developImgs">
            <a
              href="https://github.com/M1TCH3llM/e_commerce_backend"
              target="_blank"
            >
              <h2>Ecommerce Backend</h2>
              <img className="fillImg" src={Ecom} alt="Ecom Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
            </a>
          </div>
          <div className="developImgs">
            <a href="https://github.com/M1TCH3llM/employee" target="_blank">
              <h2>Employee Tracker</h2>
              <img className="fillImg" src={Emp} alt="Emp Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
            </a>
          </div>
          <div className="developImgs">
            <a href="https://github.com/M1TCH3llM/LogoGen" target="_blank">
              <h2>Logo Generator</h2>
              <img className="fillImg" src={Logo} alt="Logo Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
            </a>
          </div>
          <div className="developImgs">
            <a
              href="https://github.com/M1TCH3llM/TheBetterWeatherApp"
              target="_blank"
            >
              <h2>Weather App</h2>
              <img className="fillImg" src={Weather} alt="Weather Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevelopImg;
