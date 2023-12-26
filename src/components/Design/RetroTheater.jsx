import React, { useRef, useEffect } from "react";

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
import CheckoutOld from "../../assets/UXAssets/CheckoutOld.png";
import CheckoutNew from "../../assets/UXAssets/CheckoutNew.png";
import RetroHiFiv1 from "../../assets/UXAssets/RetroHiFiv1.png";
import Study2v1 from "../../assets/UXAssets/Study2v1.png";
import Study2v2 from "../../assets/UXAssets/Study2v2.png";
import PhoneHifi from "../../assets/UXAssets/PhoneHifi.png";
import HighFiPro from "../../assets/UXAssets/HighFiPrototype.png";
import "../../styles/NewRetro.css";
import "../../styles/Retro.css";

function RetroTheater() {
  const myButtonRef = useRef(null);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    return () => {
      window.onscroll = null;
    };
  }, []); // Empty dependency array to run the effect only once on mount

  function scrollFunction() {
    const myButton = myButtonRef.current;

    if (myButton) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div id="retroPage" style={{ paddingBottom: "7rem" }}>
      <div>
        <img id="retroBanner" src={RetroBanner} alt="retro movie banner" />
      </div>
      <div id="retroHeader">
        <h1 className="yellowFont">Retro Theater</h1>
      </div>
      <div className="yellowFont columnD">
        <h2>The Product</h2>
        <p>
          The Retro Theater website was given to us by our client that ran a mom
          and pop movie theater that had heavy design influence from the 80's
          when they first opened. We wanted to create a website that brought the
          80's back to life and to personify the theaters vibe online.
        </p>
      </div>
      <div className="yellowFont columnD">
        <h3>Project Duration</h3>
        <p>Duration February 1st 2023 to April 10th 2023</p>
      </div>
      <div className="yellowFont wrapCenter">
        <div className="retroBreakDown">
          <h3>The Problem</h3>
          <p className="sPwidth">
            The theater we were working for had no online presence and it was
            difficult for movie goers to find showings and times, as well as
            book tickets in advance.
          </p>
        </div>
        <div className="retroBreakDown">
          <h3>The Goal</h3>
          <p className="sPwidth">
            The goal was to create a website that not only encapsulated the 80's
            retro theme of the theater, but also make it easy for users to
            navigate and book movie tickets online, while still conveying the
            message that this was a family owned and operated theater.
          </p>
        </div>
        <div className="retroBreakDown">
          <h3>My Role</h3>
          <p className="sPwidth">
            My role throughout this project was lead designer, lead researcher,
            as well as taking on the role of graphic design for logos,
            background, and banners.
          </p>
        </div>
        <div className="retroBreakDown">
          <h3>Responsibilities</h3>
          <p className="sPwidth">
            My responsibilities for this project included but were not limited
            to, conducting research and compiling data, wireframe design, mockup
            design, graphic design, and prototype design.
          </p>
        </div>
      </div>
      <div className="pageBreak" />
      <div className="columnD">
        <h2 className="pinkFont">Research Overview</h2>
        <div className="yellowFont">
          <p>
            By conducting extensive user research and creating empathy maps, we
            were able to target pain points in the user experience. Our initial
            assumption was that users simply wanted a website to purchase show
            tickets. However, through in-depth interviews and studying user
            behavior, we discovered that including additional information about
            the movie, theater, and staff would make the experience more homely
            and welcoming. We aimed to create a unique experience distinct from
            other big box theaters and our research helped us achieve that goal.
            <br />
            <br />
            Throughout our research process, we gained valuable insights by
            conducting in-depth interviews with key users and developing user
            personas. Our focus was on catering to busy working individuals who
            struggle to find the perfect venue that suits their specific needs.
            Our user group confirmed our initial assumptions while also
            introducing fresh perspectives and considerations. For instance,
            users emphasized the importance of theater amenities such as special
            events and food options.
            <br />
            <br />
            By incorporating these valuable insights, our application addresses
            all aspects of movie selection, while providing a comprehensive
            solution for my users.
          </p>
        </div>
      </div>
      <div className="pinkFont">
        <h2>Pain Points</h2>
        <div id="retroPainPoints" className="wrapCenter">
          <div>
            <h3>Navigation</h3>
            <p className="sPwidth sPwidthS">
              Users want a simple navigation experience that doesn't get them
              lost when looking for movies.
            </p>
          </div>
          <div>
            <h3>Tickets</h3>
            <p className="sPwidth sPwidthS">
              Users want a simple navigation experience that doesn't get them
              lost when looking for movies.
            </p>
          </div>
          <div>
            <h3>Movie Info</h3>
            <p className="sPwidth sPwidthS">
              Users want a way to read about the movie to better understand if
              its a film they would like to see or not.
            </p>
          </div>
        </div>
      </div>
      <div className="pinkFont" id="retroPersonas">
        <h2>User Personas</h2>
        <div className="spaceAround">
          <div>
            <h3>Sarah</h3>
            <img className="wideImg" src={UserSarah} />
          </div>
          <div>
            <h3>James</h3>
            <img className="wideImg" src={UserJames} />
          </div>
        </div>
      </div>
      <div className="pageBreak" />

      <div className="blueFont" id="design">
        <h2>Design</h2>
      </div>
      <div className="blueFont spaceAround" id="retroMap">
        <img className="wideImg" src={Map} alt="Retro Movie Map" />
        <div id="retroMapInfo">
          <h3>Site Map</h3>
          <p className="yellowFont">
            My goal was to identify pain points that the user may have and
            design a site map that will help mitigate most pain points, as well
            as fulfill the users needs.
          </p>
        </div>
      </div>
      <div className="blueFont" id="paperWireFrame">
        <div>
          <h2>Paper Wire Frames</h2>
        </div>
        <div className="spaceAround">
          <div className="columnD">
            <h3>Crazy 8's</h3>
            <p className="yellowFont">
              This step was done with digital wireframes and only using crazy
              8's sketches as references. The reason for this was I already knew
              exactly where features were going to be incorporated into the
              design and it would be easier to share ideal with colleges
              remotely.
            </p>
          </div>
          <img
            className="mediumImg
          "
            src={Eights}
            alt="Crazy Eights Drawing"
          />
        </div>
      </div>
      <div className="blueFont">
        <div className="columnD">
          <h2>Paper Wireframe Screen Size Variation</h2>
          <p className="yellowFont">
            My goal during this process was to keep similar attributes and
            functionalities between screens. A user in theory would be able to
            navigate the phone screen just the same as the web page.
          </p>
        </div>
        <div className="wrapCenter m-t2">
          <div>
            <img className="wideImg" src={PaperWeb} alt="Paper wireframe Web" />
            <h3 id="paperH3">Web</h3>
          </div>
          <div id="paperH3">
            <img
              className="wideImg"
              src={PaperTab}
              alt="Paper wireframe Phone"
            />
            <h3>Tablet & Phone</h3>
          </div>
        </div>
      </div>
      <div className="blueFont">
        <div className="columnD">
          <h2>Digital WireFrames</h2>
          <div>
            <p className="yellowFont">
              My goal was to make the site as easy to navigate as possible and
              display movies that would be most relevant to users, so searching
              for them would not be a hassle.
            </p>
          </div>
        </div>
        <div className="wrapCenter m-t2">
          <div>
            <img
              className="imgMedHeight m-s1"
              src={WebWF}
              alt="Early Web Digital Wire Frame"
            />
            <h3>Web</h3>
          </div>
          <div>
            <img
              className="imgMedHeight m-s1"
              src={TabletWF}
              alt="Early Tablet Digital Wire Frame"
            />
            <h3>Tablet</h3>
          </div>
          <div>
            <img
              className="imgMedHeight m-s1"
              src={PhoneWF}
              alt="Early Phone Digital Wire Frame"
            />
            <h3>Phone</h3>
          </div>
        </div>
      </div>
      <div className="blueFont spaceAround m-t2">
        <div>
          <h2>Low Fidelity Prototype</h2>
          <p className="yellowFont">
            Initially for my low fidelity prototype I wanted to simulate the
            user flow for booking a movie tickets. This way we can identify
            critical user issues and prototype shortcomings.
          </p>
        </div>
        <img className="wideImg" src={LoFi} alt="" />
      </div>
      <div className="pageBreak" />

      <div className="yellowFont">
        <h2>Usability Study</h2>
        <div>
          <h3>Parameters</h3>
          <div className="spaceAround">
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
        <div className="columnD m-t2">
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
        <div className="spaceAround">
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
          <div className="spaceAround m-t2">
            <img className="stableWideImg" src={WebWF} alt="first paper web" />
            <div>
              <h4>Finding #1</h4>
              <p className="findingPWidth">
                I updated the home page and changed the movie ferris wheel to be
                more intuitive and interactive so users will be able to select
                movies and navigate to booking form.
              </p>
            </div>
            <img
              className="stableWideImg"
              src={Home2}
              alt="wire from iteration"
            />
          </div>
          <div className="spaceAround m-t1">
            <img
              className="stableWideImg"
              src={OldMovie}
              alt="Pre user study wireframe"
            />
            <div>
              <h4>Finding #2</h4>
              <p className="findingPWidth">
                To make the ticket selection and booking process I updated the
                layout to consist of two separate pages as opposed to one. This
                helped users who where unable to find the ticket purchasing page
                due to it not being visible.
              </p>
            </div>
            <div className="columnD">
              <img
                className="stableWideImg"
                src={NewMovie1}
                alt="New movie Wireframe"
              />
              <img
                className="stableWideImg m-t1"
                src={NewMovie2}
                alt="new booking wire frame"
              />
            </div>
          </div>
          <div className="spaceAround m-t1">
            <img
              className="stableWideImg"
              src={CheckoutOld}
              alt="Pre User study checkout"
            />
            <div>
              <h4>Finding #3</h4>
              <p className="findingPWidth">
                I updated the checkout page to include loyalty information from
                users.
              </p>
            </div>
            <img
              className="stableWideImg"
              src={CheckoutNew}
              alt="post user study checkout"
            />
          </div>
        </div>
      </div>
      <div className="pageBreak" />

      <div className="pinkFont">
        <h2>Mockups</h2>
        <div className="columnD">
          <img className="fullImg" src={RetroHiFiv1} alt="" />
        </div>
        <div className="spaceAround m-t2">
          <img
            className="stableWideImg"
            src={Study2v1}
            alt="Fist iteration of hifi prototype"
          />
          <div>
            <h3>Second User Study</h3>
            <p className="yellowFont sPwidth sPwidthS">
              After a second usability study I found that the clashing of yellow
              font on a blue background was difficult for users to see.
            </p>
          </div>
          <img
            className="stableWideImg"
            src={Study2v2}
            alt="Final Iteration of hifi prototype"
          />
        </div>
      </div>
      <div className="pinkFont columnD">
        <h3>Mobile Mockups</h3>
        <img className="fullImg" src={PhoneHifi} alt="" />
      </div>
      <div className="pinkFont columnD m-t1">
        <h3>High Fidelity Prototypes</h3>
        <img className="fullImg" src={HighFiPro} alt="" />
      </div>
      <div className="m-t3" id="link">
        <a
          id="linkA"
          href="https://xd.adobe.com/view/5599654b-692f-466b-ae0f-d6adcde40fe4-00ca/"
          target="blank"
        >
          Link To HiFi Prototypes
        </a>
      </div>
      <div className="pageBreak m-t3" />
      <div className="pinkFont m-t2 columnD">
        <h2>Final Thoughts</h2>
        <div className="yellowFont">
          <p>
            During this project I really wanted to explore different design
            techniques and color pallets as well as theme. It was difficult to
            maintain an easy to read page with a vibrant color scheme and a
            maximalist 80s design. However I feel that it was pulled off well
            and meets the criteria for from and function.
            <br />
            <br />
            I would like to finish off the other pages including but not limited
            to snack ordering page, staff page, and about us page. as well as
            continue testing after new features are added and reviewing old
            feature to improve upon design.
            <br />
            <br />
            Thank You For Reviewing This Project!
          </p>
        </div>{" "}
        <button onClick={topFunction} className="m-t3 " id="bckTop">
          Back To Top
        </button>
      </div>
    </div>
  );
}

export default RetroTheater;
