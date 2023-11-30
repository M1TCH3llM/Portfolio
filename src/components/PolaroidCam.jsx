import React from "react";
import Camera from "../assets/polaroidCam.png";
import "../styles/Home.css";
import Blurb from "../assets/BlurbPhoto.png";
import { useEffect } from "react";

function PolaroidCam() {
  useEffect(() => {
    const imageSets = document.querySelectorAll(".blurbPolaroid");

    imageSets.forEach((imageSet) => {
      const fillImg = imageSet.querySelector(".blurb");
      fillImg.style.filter = "grayscale(100%) brightness(0%)";
      fillImg.style.transition = "10s";

      setTimeout(() => {
        fillImg.style.filter = "grayscale(0%) brightness(100%)";
      }, 1000);
    });
  }, []);

  return (
    <>
      <div className="blurbPolaroid">
        <img className="blurb" src={Blurb} alt="Blurb Icon" />
        <img className="camera" src={Camera} alt="Polaroid Camera" />
      </div>
    </>
  );
}

export default PolaroidCam;
