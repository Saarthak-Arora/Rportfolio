import React,{useState} from 'react';
// import { GiSkills } from "react-icons/gi";
import * as IOIcons from 'react-icons/io';
import {FaHandshake} from 'react-icons/fa';
import './Navbar.css';
import Home from '../pages/Home';
import { Link,Route,Routes  } from 'react-router-dom'
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';


const Navbar = () => {
    const [active,SetActive] = useState(false);

    const activateNav = () =>{
        SetActive(!active);
    }
  return (
    <>
    <div className={active ? 'header' : 'header-mobile'}>
    <span className="logo">SA</span>
    <div className='menu-icon' onClick={activateNav}>
            {!active ? <IOIcons.IoMdMenu className='menu'/> : <IOIcons.IoMdClose className='close-icon'/>}
    </div>
    <nav>
        <ul className={active ? 'ul-item' : 'ul-item_oicon'} >
            <li>
               
                <Link to='/'><IOIcons.IoIosHome className='icon'/><h1>Home</h1></Link>
            </li>
        
            <li>
                
                <Link to='src/pages/Projects'><IOIcons.IoMdRocket className='icon'/><h1>Projects</h1></Link>
            </li>
            <li>
                
                <Link to='src/pages/Skills'><IOIcons.IoMdSettings className='icon'/><h1>Skills</h1></Link>
            </li>
            <li>
                
                <Link to='src/pages/Resume'><IOIcons.IoMdDocument className='icon'/><h1>Resume</h1></Link>

            </li>
            <li>
                <Link to='src/pages/Contact'><FaHandshake className='icon'/><h1>Connect With Me</h1></Link>
            </li>    
          
        </ul>
    </nav>
</div>
 <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='src/pages/Projects' element={<Projects/>}/>
       <Route path='src/pages/Skills' element={<Skills/>}/>
       <Route path='src/pages/Resume' element={<Resume/>}/>
       <Route path='src/pages/Contact' element={<Contact/>}/>

 </Routes>
</>
  )
}

export default Navbar