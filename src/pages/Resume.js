import React from "react";
import resume from "./resume.png";
import ResumeVideo from './ResumeVideo.mp4';
import "./Resume.css";



const Resume = () => {
  return (
    <>
      <div className="containerr">
      <div className="left">
      <video className="video" src={ResumeVideo} width="750" height="500" controls>
     </video>
     <button>DownLoad Resume</button>
      </div>
        <img className="resume" src={resume} alt="" />
      <div className="right"></div>
      </div>
    </>
  );
};

export default Resume;
