import "../styles/Home.css";
import React, { useRef, useState } from "react";
import Frame from "../assets/PoliroidFrame.png";
import Photo from "../assets/Photo.png";
function Home() {
  return (
    <>
      <div className="name">
        <div>
        <img className="fillImgH" src={Photo} alt="Shred Image" />
        <img className="frameH" src={Frame} alt="Frame Image" />
        <div>
          
        </div>
          <h2>Hi, My Name is</h2>
          <h1>Mitch</h1>
        </div>
      </div>
      <div id="qBio">
        Hi! I'm A Full stack developer with UX, UI design experience. I enjoy
        making easy and fun to use websites and apps. all img assets where home
        made by me for you. please take your time to look over my web site! and
        enjoy!!!
      </div>
    </>
  );
}

export default Home;
