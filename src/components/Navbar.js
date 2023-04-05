import React,{useState} from 'react';
import * as IOIcons from 'react-icons/io';
import {FaHandshake} from 'react-icons/fa';
import './Navbar.css';
import { Link,Route,Routes  } from 'react-router-dom'
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import HomeContent from '../pages/HomeContent';


const Navbar = () => {
   
    const scrollTop = () =>
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

    const [active,SetActive] = useState(false);

    const activateNav = () =>{
        SetActive(!active);
    }
  return (
    <>
     <span className="logomobile" onClick={()=>{SetActive(!active)}}>SA</span>
    <div className={active ? 'header' : 'header-mobile'}>
    <span className="logo">SA</span>
    <div className='menu-icon' onClick={activateNav}>
            {!active ? <IOIcons.IoMdMenu className='menu'/> : <IOIcons.IoMdClose className='close-icon'/>}
    </div>
    <nav>
        <ul className={active ? 'ul-item' : 'ul-item_oicon'} >
            <li>
               
                <Link to='/' onClick={scrollTop}><IOIcons.IoIosHome className='icon'/><h1  onClick={activateNav}>Home</h1></Link>
            </li>
        
            <li>
                
                <Link to='src/pages/Projects' onClick={scrollTop} ><IOIcons.IoMdRocket className='icon'/><h1  onClick={activateNav}>Projects</h1></Link>
            </li>
            <li>
                
                <Link to='src/pages/Skills' onClick={scrollTop} ><IOIcons.IoMdSettings className='icon'/><h1  onClick={activateNav}>Skills</h1></Link>
            </li>
            <li>
                
                <Link to='src/pages/Resume' onClick={scrollTop}><IOIcons.IoMdDocument className='icon'/><h1  onClick={activateNav}>Resume</h1></Link>

            </li>
            <li>
                <Link to='src/pages/Contact' onClick={scrollTop} ><FaHandshake className='icon'/><h1  onClick={activateNav}>Connect With Me</h1></Link>
            </li>    
          
        </ul>
    </nav>
</div>
 <Routes >
        <Route path='' element={<HomeContent/>}/>
       <Route path='src/pages/Projects' element={<Projects/>}/>
       <Route path='src/pages/Skills' element={<Skills/>}/>
       <Route path='src/pages/Resume' element={<Resume/>}/>
       <Route path='src/pages/Contact' element={<Contact/>}/>

 </Routes>
</>
  )
}

export default Navbar