import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
