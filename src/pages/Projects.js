import React from "react";
import "./project.css";
// import p1 from "./NewsP.png";
// import p2 from "./RamRathGame.png";
import { FaHands } from "react-icons/fa";
import ProjectsData from "../Data/ProjectData";


const Projects = () => {
  return (
    <>
    
   
    <div className="containerP">
      <div className="cards-container">

      {
        ProjectsData.map((val)=>{
          return (
            <div className="card">
          <img className='Pimg' src={val.img} alt="Image" />
          <div className="card-content">
            <h4>{val.ProjectName}</h4>
            <p>
              {/* <a target={'__blank'} href={val.docLink}><button>Document</button></a> */}
              <a target={'__blank'} href={val.gitLink}><button>Source Code</button></a>
              <a target={'__blank'} href={val.livLink}><button>Live Link</button></a>
            </p>
          </div>
        </div>


        )})
      }
     </div>
     </div> 

      <div className="conh">
        <FaHands className="hands" />
      </div> 
     <div className="base"> <h1>प्रभु की कृपा भयउ सब काजू, जनम हमार सुफल भा आजू</h1></div>
    </>
  );
};

export default Projects;
