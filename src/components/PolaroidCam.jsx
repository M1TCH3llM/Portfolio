import React from "react";
import Camera from "../assets/polaroidCam.png";
import "../styles/Home.css";
import Blurb from "../assets/BlurbPhoto.png";
import { useEffect } from "react";

function PolaroidCam() {
  useEffect(() => {
    const imageSets = document.querySelectorAll(".blurbPolaroid");

    imageSets.forEach((imageSet) => {
      const blurb = imageSet.querySelector(".blurb");

      imageSet.addEventListener("mouseenter", () => {
        blurb.style.filter = "grayscale(0%) brightness(100%)";
      });
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
