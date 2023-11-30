import React, { useEffect } from "react";
import Frame from "../assets/PoliroidFrame.png";
import "../styles/Design.css";
import Retro from "../assets/RetroLogo.png";
import Space from "../assets/safeSpace.png";
import Venue from "../assets/VenuesLogo.png";

function Design() {
  useEffect(() => {
    const imageSets = document.querySelectorAll(".developImgs");

    imageSets.forEach((imageSet) => {
      const fillImg = imageSet.querySelector(".fillImg");
      fillImg.style.filter = "grayscale(100%) brightness(0%)";
      fillImg.style.transition = "10s";

      setTimeout(() => {
        fillImg.style.filter = "grayscale(0%) brightness(100%)";
      }, 1000);
    });
  }, []);

  return (
    <div id="desBod">
      <h1>UX/UI Projects</h1>
      <div id="desImgs">
        <div className="developImgs">
          <a href="https://github.com/nlad218/ShredNStyle" target="_blank">
            <h2>Retro Theater</h2>
            <img className="fillImg" src={Retro} alt="Shred Image" />
            <img className="frame" src={Frame} alt="Frame Image" />
            <div></div>
          </a>
        </div>
        <div className="developImgs">
          <a href="https://github.com/nlad218/ShredNStyle" target="_blank">
            <h2>Venues</h2>
            <img className="fillImg" src={Venue} alt="Shred Image" />
            <img className="frame" src={Frame} alt="Frame Image" />
            <div></div>
          </a>
        </div>
        <div className="developImgs">
          <a href="https://github.com/nlad218/ShredNStyle" target="_blank">
            <h2>Safe Space</h2>
            <img className="fillImg" src={Space} alt="Shred Image" />
            <img className="frame" src={Frame} alt="Frame Image" />
            <div></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Design;
