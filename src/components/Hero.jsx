import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero floating-modal">
      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <h2>Garrell Macarilay</h2>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          >
            Startup Founder
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
