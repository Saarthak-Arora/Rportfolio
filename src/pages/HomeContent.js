import React from "react";
import im from './HomeImage.jpeg'

const HomeContent = () => {
  return (
    <div className="mainPage">
     
        <div className="text">
          <h1>
            I bow down to that Goddess Sarasvatī, who is supremely capable and
            who is the bestower of intellect. — From a Sarasvatī Stotra
          </h1>
        </div>

        <div className="text2">
        <h2>GREETINGS _/\_ , <br/> My name is Saarthak Arora</h2>
        </div>
       
  
            <div className="i-sk">
              <div className="i-sk-wrapper">
                <div className="sk">Love to Built</div>
                <div className="sk">Learning Enthusiast</div>
                <div className="sk">Beleive in Making Something Valuable</div>
            </div>
          </div>

          <img src={im}  className="im"/>

          
     
    </div>
  );
};

export default HomeContent;
