import React from 'react';

function Certificates() {
  return (
    <>
      <section id="certificates" className="certificates">
        <div className="container section-title" data-aos="fade-up">
          <h2>Certificates</h2>
          <p>
            Welcome to my certificates section, showcasing my achievements and
            milestones in various fields. Each certificate represents a step in
            my journey of learning, growth, and dedication to excellence.
          </p>
        </div>
        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/Certificates/AI_Prompt_Certificate.png" 
                    className="img-fluid"
                    alt="Certificate in AI Prompt"
                  />
                  <div className="portfolio-info">
                    <h4>AI Prompt Certificate</h4>
                    <p>Completed an intensive workshop focused on creating applications using AI prompts.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/Certificates/Investing_Certificate.png"
                    className="img-fluid"
                    alt="Certificate 2"
                  />
                  <div className="portfolio-info">
                    <h4>Investment Certificate</h4>
                    <p>Completed a comprehensive course on financial analytical skills for budgeting, saving, and wealth-building strategies.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/Certificates/Marketing_Certificate.png"
                    className="img-fluid"
                    alt="Certificate 3"
                  />
                  <div className="portfolio-info">
                    <h4>Fundamentals of Marketing Certificate</h4>
                    <p>Acquired essential knowledge in marketing principles, consumer behavior, and digital marketing strategies through the DICT’s Fundamentals of Marketing program.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
                <div className="portfolio-content h-100">
                  
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
                <div className="portfolio-content h-100">
                  <img
                    src="assets/img/Certificates/Risk_Management_Certificate.png"
                    className="img-fluid"
                    alt="Certificate 5"
                  />
                  <div className="portfolio-info">
                    <h4>Investment Risk Management Certificate</h4>
                    <p> Gained insights into portfolio management, market analysis, and decision-making strategies to minimize potential investment losses and optimize returns.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
                <div className="portfolio-content h-100">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates;