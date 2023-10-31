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
        Hi! I'm A Full stack developer with UX, UI design experience. I enjoy making easy and fun to use websites and apps. A lot of my inspiration for this portfolio came from the "outside art" movement. all img assets where home made by me for you. please take your time to look over my web site! and enjoy!!!
      </div>
    </>
  );
}

export default Home;
