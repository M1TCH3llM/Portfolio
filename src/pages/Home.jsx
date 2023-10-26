import "../styles/Home.css";
import React, { useRef, useState } from "react";
import Atom from "../components/Atom"

function Home() {
  return (
    <>
    <div>
   <Atom />
    </div>
      <div className="name">
        <div>
          <h2>Hi, My Name is</h2>
          <h1>Mitch</h1>
          <div className="dAndd"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
