import React, { useState, useEffect } from "react";
import Frame from "../assets/PoliroidFrame.png";
import "../styles/Design.css";
import Retro from "../assets/RetroLogo.png";
import Space from "../assets/safeSpace.png";
import Venue from "../assets/VenuesLogo.png";
import RetroTheater from "../components/Design/RetroTheater";
import Venues from "../components/Design/Venues";
import SafeSpace from "../components/Design/SafeSpace";

function Design() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isRetroTheaterVisible, setIsRetroTheaterVisible] = useState(false);
  const [isVenuesVisible, setIsVenuesVisible] = useState(false);
  const [isSafeSpaceVisible, setIsSafeSpaceVisible] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);

  useEffect(() => {
    const imageSets = document.querySelectorAll(".developImgs");

    imageSets.forEach((imageSet, index) => {
      const fillImg = imageSet.querySelector(".fillImg");
      fillImg.style.filter = "grayscale(100%) brightness(0%)";
      fillImg.style.transition = "10s";

      setTimeout(() => {
        fillImg.style.filter = "grayscale(0%) brightness(100%)";
      }, 1000);

      imageSet.addEventListener("click", () => {
        setSelectedImage(index);

        // Update visibility based on selected image
        // if (index === 0) {
        //   setIsRetroTheaterVisible(true);
        //   setIsVenuesVisible(false);
        //   setIsSafeSpaceVisible(false);
        // } else if (index === 1) {
        //   setIsRetroTheaterVisible(false);
        //   setIsVenuesVisible(true);
        //   setIsSafeSpaceVisible(false);
        // } else if (index === 2) {
        //   setIsRetroTheaterVisible(false);
        //   setIsVenuesVisible(false);
        //   setIsSafeSpaceVisible(true);
        // }

        setCurrentComponent(imageSet.getAttribute("data-component"));
      });
    });
  }, []);

  return (
    <>
      <div id="desBod">
        <h1>UX/UI Projects</h1>
        <div id="desImgs">
          <div className="developImgs" data-component="RetroTheater">
            <a>
              <h2>Retro Theater</h2>
              <img className="fillImg" src={Retro} alt="Shred Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
              <div></div>
            </a>
          </div>
          <div className="developImgs" data-component="Venues">
            <a>
              <h2>Venues</h2>
              <img className="fillImg" src={Venue} alt="Shred Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
              <div></div>
            </a>
          </div>
          <div className="developImgs" data-component="SafeSpace">
            <a>
              <h2>Safe Space</h2>
              <img className="fillImg" src={Space} alt="Shred Image" />
              <img className="frame" src={Frame} alt="Frame Image" />
              <div></div>
            </a>
          </div>
        </div>{isRetroTheaterVisible && <RetroTheater />}
      {isVenuesVisible && <Venues />}
      {isSafeSpaceVisible && <SafeSpace />}
      </div>{" "}
      
    </>
  );
}

export default Design;
