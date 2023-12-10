import React from "react";

import RetroBanner from "../../assets/UXAssets/RetroBanner.png";
import UserSarah from "../../assets/UXAssets/RetroMovieSarah.png";
import UserJames from "../../assets/UXAssets/RetroMovieJames.png";
import Map from "../../assets/UXAssets/RetroMovieMap.png";
import Eights from "../../assets/UXAssets/RetroEights.png";
import PaperWeb from "../../assets/UXAssets/WebPaper.png";
import PaperTab from "../../assets/UXAssets/phonePaper.png";
import WebWF from "../../assets/UXAssets/WebDWF.png";
import PhoneWF from "../../assets/UXAssets/phoneDWF.png";
import TabletWF from "../../assets/UXAssets/TabletDWF.png";
import LoFi from "../../assets/UXAssets/LoFiProto.png";
import Home2 from "../../assets/UXAssets/newWebHome.png";
import OldMovie from "../../assets/UXAssets/movie1.png";
import NewMovie1 from "../../assets/UXAssets/NewMovie1.png";
import NewMovie2 from "../../assets/UXAssets/NewMovie2.png";
import CheckoutOld from "../../assets/UXAssets/CheckOutOld.png";
import CheckoutNew from "../../assets/UXAssets/CheckoutNew.png";
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
        <h2 id="retroResearchH2">Research Overview</h2>
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
            introducing fresh perspectives and considerations. For instance,
            users emphasized the importance of theater amenities such as special
            events and food options.
          </p>
          <p>
            By incorporating these valuable insights, our application addresses
            all aspects of movie selection, while providing a comprehensive
            solution for my users.
          </p>
        </div>
      </div>
      <div id="retroPain">
        <h2 id="retroPainH2">Pain Points</h2>
        <div id="retroPainPoints">
          <div className="pain">
            <h2>Navigation</h2>
            <p>
              Users want a simple navigation experience that doesn't get them
              lost when looking for movies.
            </p>
          </div>
          <div className="pain">
            <h2>Tickets</h2>
            <p>
              Users want a simple navigation experience that doesn't get them
              lost when looking for movies.
            </p>
          </div>
          <div className="pain">
            <h2>Movie Info</h2>
            <p>
              Users want a way to read about the movie to better understand if
              its a film they would like to see or not.
            </p>
          </div>
        </div>
      </div>
      <div id="retroPersonas">
        <h2>User Personas</h2>
        <div id="userContainer">
          <div className="retroUser">
            <h3>Sarah</h3>
            <img src={UserSarah} />
          </div>
          <div className="retroUser">
            <h3>James</h3>
            <img src={UserJames} />
          </div>
        </div>
      </div>
      <div id="design">
        <h2>Design</h2>
      </div>
      <div id="retroMap">
        <img src={Map} alt="Retro Movie Map" />
        <div id="retroMapInfo">
          <h3>Site Map</h3>
          <p>
            My goal was to identify pain points that the user may have and
            design a site map that will help mitigate most pain points, as well
            as fulfill the users needs.
          </p>
        </div>
      </div>
      <div id="paperWireFrame">
        <div>
          <h2>Paper Wire Frames</h2>
        </div>
        <div id="crazyEightsCon">
          <div>
            <h3>Crazy 8's</h3>
            <p id="crazyP">
              This step was done with digital wireframes and only using crazy
              8's sketches as references. The reason for this was I already knew
              exactly where features were going to be incorporated into the
              design and it would be easier to share ideal with colleges
              remotely.
            </p>
          </div>
          <img src={Eights} alt="Crazy Eights Drawing" />
        </div>
      </div>
      <div>
        <div id="paperInfo">
          <h2>Paper Wireframe Screen Size Variation</h2>
          <p>
            My goal during this process was to keep similar attributes and
            functionalities between screens. A user in theory would be able to
            navigate the phone screen just the same as the web page.
          </p>
        </div>
        <div id="paperImg">
          <div>
            <img
              className="paperImg"
              src={PaperWeb}
              alt="Paper wireframe Web"
            />
            <h3 id="paperH3">Web</h3>
          </div>
          <div id="paperH3">
            <img
              className="paperImg"
              src={PaperTab}
              alt="Paper wireframe Phone"
            />
            <h3>Tablet & Phone</h3>
          </div>
        </div>
      </div>
      <div>
        <div id="digitalWF">
          <h2>Digital WireFrames</h2>
          <div>
            <p>
              My goal was to make the site as easy to navigate as possible and
              display movies that would be most relevant to users, so searching
              for them would not be a hassle.
            </p>
          </div>
        </div>
        <div id="digitalWFCon">
          <div>
            <img
              className="dWF"
              src={WebWF}
              alt="Early Web Digital Wire Frame"
            />
            <h3>Web</h3>
          </div>
          <div>
            <img
              className="dWF"
              src={TabletWF}
              alt="Early Tablet Digital Wire Frame"
            />
            <h3>Tablet</h3>
          </div>
          <div>
            <img
              className="dWF"
              src={PhoneWF}
              alt="Early Phone Digital Wire Frame"
            />
            <h3>Phone</h3>
          </div>
        </div>
      </div>
      <div id="lofiProtoCon">
        <div id="lofiProto">
          <h2>Low Fidelity Prototype</h2>
          <p>
            Initially for my low fidelity prototype I wanted to simulate the
            user flow for booking a movie tickets. This way we can identify
            critical user issues and prototype shortcomings.
          </p>
        </div>
        <img id="lofiProtoImg" src={LoFi} alt="" />
      </div>
      <div id="userStudy">
        <h2>Usability Study</h2>
        <div>
          <h3>Parameters</h3>
          <div id="studyFour">
            <div>
              <h4>Study Type</h4>
              <p>Unmoderated Usability Study</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>United States Remote</p>
            </div>
            <div>
              <h4>Participants</h4>
              <p>5 Participants</p>
            </div>
            <div>
              <h4>Study Type</h4>
              <p>20 Minutes</p>
            </div>
          </div>
        </div>
        <div id="findingsInfo">
          <div>
            <h3>Findings</h3>
            <p>
              {" "}
              Based on the gathered information, it was evident that users
              expressed a desire to utilize the ferris wheel selector for
              booking movies. The ticket page presented challenges for users, as
              it was difficult to navigate and caused frustration. Additionally,
              the cart function was identified as an area that required
              improvements in order to enhance the overall user experience.
              These findings highlight the importance of streamlining the
              ticketing process and updating the cart functionality to ensure a
              smoother and more enjoyable user journey on the website.
            </p>
          </div>
        </div>
        <div id="findings">
          <div>
            <h4>Finding #1</h4>
            <p>
              Users wanted to be able to select movies on ferris wheel
              presenter.
            </p>
          </div>
          <div>
            <h4>Finding #2</h4>
            <p>
              Users had difficulty finding the book movie page because parts of
              the page were hidden.
            </p>
          </div>
          <div>
            <h4>Finding #3</h4>
            <p>
              Users wanted to be able to add their rewards info into the website
              when checking out.
            </p>
          </div>
        </div>
        <div>
          <div className="findingsDisplay">
            <img src={WebWF} alt="first paper web" />
            <div>
              <h4>Finding #1</h4>
              <p>
                I updated the home page and changed the movie ferris wheel to be
                more intuitive and interactive so users will be able to select
                movies and navigate to booking form.
              </p>
            </div>
            <img src={Home2} alt="wire from iteration" />
          </div>
          <div className="findingsDisplay">
            <img src={OldMovie} alt="Pre user study wireframe" />
            <div>
              <h4>Finding #2</h4>
              <p>
                To make the ticket selection and booking process I updated the
                layout to consist of two separate pages as opposed to one. This
                helped users who where unable to find the ticket purchasing page
                due to it not being visible.
              </p>
            </div>
            <div id="finding2Img">
            <img src={NewMovie1} alt="New movie Wireframe" />
            <img src={NewMovie2} alt="new booking wire frame" />
            </div>
          </div>
          <div className="findingsDisplay">
            <img src={CheckoutOld} alt="Pre User study checkout" />
            <div>
              <h4>Finding #3</h4>
              <p>
                I updated the checkout page to include loyalty information from
                users.
              </p>
            </div>
            <img src={CheckoutNew} alt="post user study checkout" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetroTheater;
