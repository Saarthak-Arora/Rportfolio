import React from 'react';
import './skills.css';
import img from './programmer.png'


const Skills = () => {
  return (
    <>
  
    <div className='container'>
    <div className='left'>
    <img
            alt="st"
            className="stimg"
            src={
              img
            }/>
    </div>  
    <div className='right'>
    <div className='skills'>
    
        <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/64px-ISO_C%2B%2B_Logo.svg.png'/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/64px-Unofficial_JavaScript_logo_2.svg.png'/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/64px-HTML5_logo_and_wordmark.svg.png'/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/64px-React-icon.svg.png'/> 
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/64px-CSS3_logo_and_wordmark.svg.png'/> 
        <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/DSA_Logo.png'/> 
        <img src='https://upload.wikimedia.org/wikipedia/ml/2/2e/Java_Logo.svg'/> 
        <img src='https://www.seekpng.com/png/detail/80-803529_vector-javascript-node-js-jpg-black-and-white.png'/>
        <img src='https://miro.medium.com/max/1400/1*XP-mZOrIqX7OsFInN2ngRQ.png'/>
       
    </div>
    </div>    

</div>

    </>
  )
}

export default Skills
