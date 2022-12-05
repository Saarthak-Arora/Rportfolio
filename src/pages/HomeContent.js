import React from "react";
import img from './programmer.png'

const HomeContent = () => {
  return (
    <div className="mainPage">
      <div className="Mtext">
        <div className="i-left">
          
            <h1>RAM RAM JI _/\_ , <br/> My name is Saarthak Arora</h1>
            <img
            alt="st"
            className="stimg"
            src={
              img
            }/>
            <div className="i-sk">
              <div className="i-sk-wrapper">
                <div className="sk">Problem Solver</div>
                <div className="sk">Web Developer</div>
                <div className="sk">Learning Enthusiast</div>
            </div>
          </div>
            {/* <i className="fa fa-leaf leafi" ></i> */}
        </div>
      </div>
      <div className="i-right">
        <div className="imgwrapper">
          <img
            src={
              "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Sri-Lord-Rama-Images-Hindu-Bhagwan-HD-Free-Download.jpg"
            }
            className="photo"
          />
        </div>
        <div className="text">
          <h1>
            I bow down to that Goddess Sarasvatī, who is supremely capable and
            who is the bestower of intellect. — From a Sarasvatī Stotra
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
