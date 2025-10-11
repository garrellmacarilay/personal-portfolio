import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <h2>Alex Smith</h2>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          >
            Designer
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
