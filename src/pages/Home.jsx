import "../styles/Home.css";
import React, { useRef, useState } from "react";

function Home() {
  return (
    <>
      <div className="name">
        <div>
          <h2>Hi, My Name is</h2>
          <h1>Mitch</h1>
        </div>
      </div>
      <div id="qBio">
        {" "}
        As a design and development professional, I've dedicated my career to
        creating exceptional digital experiences that seamlessly blend
        aesthetics and functionality. My work revolves around web and app
        development, where I leverage my skills to turn ideas into interactive
        realities. Currently, I'm eagerly anticipating the opportunity to delve
        into the realm of React Three Fiber, a cutting-edge technology that
        promises to unlock new dimensions of creativity and interactivity. With
        my professional background and enthusiasm for this new frontier, I'm
        excited to see how this exploration will further enhance my capabilities
        and contribute to my ever-evolving skill set.
      </div>
    </>
  );
}

export default Home;
