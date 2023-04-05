import React from "react";
import resume from "../ImageAssets/resume.png";
import ResumeVideo from '../ImageAssets/ResumeVideo.mp4';
import "./Resume.css";



const Resume = () => {
  return (
    <>
      <div className="containerr">
      <div className="left">
      <video className="video" src={ResumeVideo} width="750" height="500" controls>
     </video>
     {/* <button>DownLoad Resume</button> */}
      </div>
      <div className="rightr">
        <div className="rfile">
        <img className="resume" src={resume} alt="" />

        </div>
      </div>
      </div>
    </>
  );
};

export default Resume;
