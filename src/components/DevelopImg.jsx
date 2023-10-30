import React from "react";
import Frame from "../assets/PoliroidFrame.png";
import Shred from "../assets/ShredNstyle.png";
import Harry from "../assets/HPFP.png";
import Ecom from "../assets/ecomBackend.png";
import Emp from "../assets/EmpLineCom.png";
import Logo from "../assets/Logo.png";
import Weather from "../assets/Weather.png";

import "../styles/Develop.css";

function DevelopImg() {
    
    const frame = document.getElementById("frame");
  const fillImg = document.getElementById("fillImg");

  for (let i = 0; i < frames.length; i++) {
    frames[i].addEventListener("mouseenter", () => {
      fillImgs[i].style.filter = "grayscale(0%) brightness(100%)";
    });

    frames[i].addEventListener("mouseleave", () => {
      fillImgs[i].style.filter = "grayscale(100%) brightness(50%)";
    });
  }
    
    
  return (
    <>
    <div style={{ border: "solid 2px red" }} className="developImgs">
      <a>
        <img id="fillImg" src={Shred} />
        <img id="frame" src={Frame} />
      </a>
    </div>
    <div style={{ border: "solid 2px red" }} className="developImgs">
      <a>
        <img id="fillImg" src={Harry} />
        <img id="frame" src={Frame} />
      </a>
    </div>
    <div style={{ border: "solid 2px red" }} className="developImgs">
      <a>
        <img id="fillImg" src={Ecom} />
        <img id="frame" src={Frame} />
      </a>
    </div>
    <div style={{ border: "solid 2px red" }} className="developImgs">
      <a>
        <img id="fillImg" src={Emp} />
        <img id="frame" src={Frame} />
      </a>
    </div>
    <div style={{ border: "solid 2px red" }} className="developImgs">
      <a>
        <img id="fillImg" src={Logo} />
        <img id="frame" src={Frame} />
      </a>
    </div>
    <div style={{ border: "solid 2px red" }} className="developImgs">
      <a>
        <img id="fillImg" src={Weather} />
        <img id="frame" src={Frame} />
      </a>
    </div>
    </>
  );
}

export default DevelopImg;
