import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import SideMenu from './components/SideMenu';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfoilio from './components/Portfoilio';
import Contact from './components/Contact';
import './styles/global.css';
import Certificates from './components/Certificates';
import { addScrollEffect } from './utils/ScrollEffect';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    addScrollEffect();
  }, []);

  return (
    <div className="dark-theme">
      <SideMenu />
      <main className="main">
        <div id="hero" >
          <Hero />
        </div>
        <div id="about" className="floating-modal">
          <About />
        </div>
        <div id="certificates" className="floating-modal">
          <Certificates />
        </div>
        <div id="portfolio" className="floating-modal">
          <Portfoilio />
        </div>
        <div id="skills" className="floating-modal">
          <Skills />
        </div>
        <div id="tech" className="floating-modal">
          <Tech />
        </div>
        <div id="resume" className="floating-modal">
          <Resume />
        </div>
        <div id="contact" className="floating-modal">
          < Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
