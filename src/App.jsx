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


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="dark-theme">
      <SideMenu />
      <main className="main">
        <div className="floating-modal">
          <Hero />
        </div>
        <div className="floating-modal">
          <About />
        </div>
        <div className="floating-modal">
          <Certificates />
        </div>
        <div className="floating-modal">
          <Portfoilio />
        </div>
        <div className="floating-modal">
          <Skills />
        </div>
        <div className="floating-modal">
          <Tech />
        </div>
        <div className="floating-modal">
          <Resume />
        </div>
        <div className="floating-modal">
          < Contact />
        </div>
      </main>

    </div>
  );
}

export default App;
