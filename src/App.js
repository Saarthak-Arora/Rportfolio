import {BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import   React  from 'react';
function App() {
  
 
  return (
    
   <>
    <BrowserRouter>
   <Navbar/>
   </BrowserRouter>

    
   </>
  );
}

export default App;
