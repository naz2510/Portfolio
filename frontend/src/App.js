import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Internships from './components/Internships';
import Navbar from './components/Navbar';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
      <HeroSection/>
        <AboutMe/>
        <Skills />
        <Education />
        <Projects />
        <Internships />
        <Certifications />
        <Achievements />
        <Contact/>
      </main>
    </div>
  );
}

export default App;
