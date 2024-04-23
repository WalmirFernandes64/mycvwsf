import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skill from './components/Skill/Skill';
import Contact from './components/Footer/Contact';
import Project from './components/Project/Project';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className='content'>
        <About />
        <Experience />
        <Education />
        <Skill />
        <Project />
      </div>
      <Contact />
    </div>
  );
}

export default App;
