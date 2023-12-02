import React from "react";

import RetroBanner from "../../assets/UXAssets/RetroBanner.png";
import UserSarah from "../../assets/UXAssets/RetroMovieSarah.png";
import UserJames from "../../assets/UXAssets/RetroMovieJames.png";
import Map from "../../assets/UXAssets/RetroMovieMap.png";
import Eights from "../../assets/UXAssets/RetroEights.png"

import "../../styles/Retro.css";

function RetroTheater() {
  return (
    <div id="retroPage" style={{ paddingBottom: "5rem" }}>
      <div>
        <img id="retroBanner" src={RetroBanner} alt="retro movie banner" />
      </div>
      <div id="retroHeader">
        <h1>Retro Theater</h1>
      </div>
      <div id="retroOverView">
        <h2>The Product</h2>
        <div>
          The Retro Theater website was given to us by our client that ran a mom
          and pop movie theater that had heavy design influence from the 80's
          when they first opened. We wanted to create a website that brought the
          80's back to life and to personify the theaters vibe online.
        </div>
      </div>
      <div id="retroDuration">
        <h2>Project Duration</h2>
        <div>Duration February 1st 2023 to April 10th 2023</div>
      </div>
      <div id="retroBreakDown">
        <div className="retroBreakDown">
          <h2>The Problem</h2>
          <div>
            The theater we were working for had no online presence and it was
            difficult for movie goers to find showings and times, as well as
            book tickets in advance.
          </div>
        </div>
        <div className="retroBreakDown">
          <h2>The Goal</h2>
          <div>
            The goal was to create a website that not only encapsulated the 80's
            retro theme of the theater, but also make it easy for users to
            navigate and book movie tickets online, while still conveying the
            message that this was a family owned and operated theater.
          </div>
        </div>
        <div className="retroBreakDown">
          <h2>My Role</h2>
          <div>
            My role throughout this project was lead designer, lead researcher,
            as well as taking on the role of graphic design for logos,
            background, and banners.
          </div>
        </div>
        <div className="retroBreakDown">
          <h2>Responsibilities</h2>
          <div>
            My responsibilities for this project included but were not limited
            to, conducting research and compiling data, wireframe design, mockup
            design, graphic design, and prototype design.
          </div>
        </div>
      </div>
      <div id="retroResearch">
        <h2>Research Overview</h2>
        <div>
        <p>
          By conducting extensive user research and creating empathy maps, we
          were able to target pain points in the user experience. Our initial
          assumption was that users simply wanted a website to purchase show
          tickets. However, through in-depth interviews and studying user
          behavior, we discovered that including additional information about
          the movie, theater, and staff would make the experience more homely
          and welcoming. We aimed to create a unique experience distinct from
          other big box theaters and our research helped us achieve that goal.
        </p>
        <p>
          Throughout our research process, we gained valuable insights by
          conducting in-depth interviews with key users and developing user
          personas. Our focus was on catering to busy working individuals who
          struggle to find the perfect venue that suits their specific needs.
          Our user group confirmed our initial assumptions while also
          introducing fresh perspectives and considerations. For instance, users
          emphasized the importance of theater amenities such as special events
          and food options.
        </p>
        <p>
          By incorporating these valuable insights, our application addresses
          all aspects of movie selection, while providing a comprehensive
          solution for my users.
        </p>
        </div>
      </div>
      <div id="retroPain">
        <h2>Pain Points</h2>
        <div>
          <div className="pain">
            <h3>Navigation</h3>
            <p>
              Users want a simple navigation experience that doesn't get them
              lost when looking for movies.
            </p>
          </div>
          <div className="pain">
            <h3>Tickets</h3>
            <p>
              Users want a simple navigation experience that doesn't get them
              lost when looking for movies.
            </p>
          </div>
          <div className="pain">
            <h3>Movie Info</h3>
            <p>
              Users want a way to read about the movie to better understand if
              its a film they would like to see or not.
            </p>
          </div>
        </div>
      </div>
      <div id="retroPersonas">
        <h2>User Personas</h2>
        <div>
          <div className="retroUser">
            {/* <img src={UserSarah} /> */}
            <h3>Sarah</h3>
          </div>
          <div className="retroUser">
            {/* <img src={UserJames} /> */}
            <h3>James</h3>
          </div>
        </div>
      </div>
      <div id="Design">
        <h2>Design</h2>
      </div>
      <div id="retroMap">
        {/* <img src={Map} alt="Retro Movie Map" /> */}
        <div id="retroMapInfo">
          <h3>Site Map</h3>
          <p>
            My goal was to identify pain points that the user may have and
            design a site map that will help mitigate most pain points, as well
            as fulfill the users needs.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2>Paper Wire Frames</h2>
        </div>
        <div>
        <div>
          <h3>Crazy 8's</h3>
          <p>
            This step was done with digital wireframes and only using crazy 8's
            sketches as references. The reason for this was I already knew
            exactly where features were going to be incorporated into the design
            and it would be easier to share ideal with colleges remotely.
          </p>
        </div>
        {/* <img src={Eights} alt="Crazy Eights Drawing" /> */}
        </div>
      </div>
    </div>
  );
}

export default RetroTheater;
