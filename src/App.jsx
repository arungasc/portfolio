import React from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Education from './Education';
import Project from './Project';
import Footer from './Footer';


function App() {

  return (
    <>
    <Router>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/education" element={<Education />} />
      <Route path="/project" element={<Project />} />
      </Routes>
      <Footer/>
      </Router>   
    </>
  )
}

export default App
