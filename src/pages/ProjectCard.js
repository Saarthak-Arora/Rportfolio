import React from 'react'
import p2 from "./RamRathGame.png";


const ProjectCard = () => {
    return(
    <div className="card">
          <img className='Pimg' src={require('./NewsP.png')} alt="Image" />
          <div className="card-content">
            <h2>title1</h2>
            <p>content </p>
          </div>
    </div>
    );
  
}

export default ProjectCard;