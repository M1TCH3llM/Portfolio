import "../styles/Home.css";
import React, { useRef, useState } from "react";
import Frame from "../assets/PoliroidFrame.png";
import Photo from "../assets/Photo.png";
import PolaroidCam from "../components/PolaroidCam";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="myInfo">
          <div className="name">
            <div>
              <img className="fillImgH" src={Photo} alt="Shred Image" />
              <img className="frameH" src={Frame} alt="Frame Image" />
              <div></div>
              <h2>Hi, My Name is</h2>
              <h1>Mitch</h1>
            </div>
          </div>
          <div id="qBio">
            Hi! I'm A Full Stack Developer with UX, UI Design experience. I
            enjoy making easy and fun to use websites and apps. All img assets
            where home made by me for you. Please take your time to look over my
            web site! and enjoy!!!
          </div>
        </div>
        <div className="homeCam">
          <h2>What's In Development</h2>
          <div>
            <a href="https://github.com/ljkahn/Blurb" target="_blank">
              <PolaroidCam />
            </a>
          </div>
          <div className="projectInfo">
            <h3>Blurb</h3>
            <div>
              Blurb is a social media application utilizing React, MongoDB,
              GraphQL, Node and Express. This is a demonstration of CRUD
              capabilities with this tech stack.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
