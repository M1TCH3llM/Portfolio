import React from "react";
import Project1 from "../assets/Resume1.png";
import "../styles/Develop.css";

function Develop() {
  return (
    <div>
      <div id="devBod">
        <div className="developImgs">
          <a>
            <img src={Project1} />
          </a>
        </div>
        <div className="developImgs">
          <a>
            <img src={Project1} />
          </a>
        </div>
        <div className="developImgs">
          <a>
            <img src={Project1} />
          </a>
        </div>
        <div className="developImgs">
          <a>
            <img src={Project1} />
          </a>
        </div>
        <div className="developImgs">
          <a>
            <img src={Project1} />
          </a>
        </div>
        <div className="developImgs">
          <a>
            <img src={Project1} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Develop;
