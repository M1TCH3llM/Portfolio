import React from "react";
import Res from "../assets/resume.png";
import "../styles/Resume.css"

function Resume() {
  return (
    <div id="resCon">
      <img className="resume" src={Res} alt="Resume" />
    </div>
  );
}

export default Resume;
