import React from "react";
import im from "../ImageAssets/HomeImage.jpeg";

const HomeContent = () => {
  return (
    <div className="mainPage">
      <div className="text">
      <h1>Hare Krishan Hare Krishan Krishan Krishan Hare Hare Hare Ram Hare Ram Ram Ram Hare Hare</h1>
        <h1>
          I bow down to that Goddess Sarasvatī, who is supremely capable and who
          is the bestower of intellect. — From a Sarasvatī Stotra
        </h1>
        <div className="i-sk">
          <div className="i-sk-wrapper">
            <div className="sk">Love to Built</div>
            <div className="sk">Learning Enthusiast</div>
            <div className="sk">Love to Communicate With Computers</div>
          </div>
        </div>
      </div>

      <div className="text2">
        <div className="gtt">
          <img src={im} className="im" />
          <h2>
            GREETINGS _/\_ , <br /> My name is Saarthak Arora 
          </h2>
          {/* <img src={fl} className='fl' /> */}

        </div>
      </div>
    </div>
  );
};

export default HomeContent;
