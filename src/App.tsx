import React from 'react';
import './App.css';
import Navbar from './Navbar&Footer/Navbar';
import HomePage from './Pages/Home/HomePage';
import Resume from './Pages/ResumePart/Resume';
import About from './Pages/About/About';
import Project from './Pages/Projects/Project';
import Contact from './Pages/Contact/Contact';
import Footer from './Navbar&Footer/Footer';
function App() {
  return (
    <>
    
    <Navbar/>
    <HomePage/>
    <About/>
    <Resume/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
