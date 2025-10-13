import React from 'react';

function Resume() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/assets/Macarilay_Resume.pdf'; // Ensure the file is in the public/assets folder
    link.download = 'Macarilay_Resume.pdf'; // The name of the downloaded file
    link.click();
  };

  return (
    <>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            A motivated and detail-oriented Information Systems student seeking an entry-level software engineering position to leverage technical skills and academic knowledge. Eager to contribute to dynamic development teams.
          </p>
          <br />
          <button className="btn" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Garrell B. Macarilay</h4>
                <p>
                  <em>
                    A motivated and detail-oriented Information Systems student with a strong foundation in programming, database management, and software development. Proven leadership and collaboration skills with a track record of academic excellence.
                  </em>
                </p>
                <ul>
                  <li>Marikina City, Philippines</li>
                  <li>09195947844</li>
                  <li>gmacarilay1@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>College</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>La Verdad Christian College, Apalit, Pampanga</em>
                </p>
                <p>2st Year - President Lister</p>
                <p>1st Year - President Lister</p>
              </div>
              <div className="resume-item">
                <h4>Senior High School</h4>
                <h5>2021 - 2023</h5>
                <p>
                  <em>La Verdad Christian School, Apalit, Pampanga</em>
                </p>
                <p>Graduated with honors.</p>
              </div>
              <div className="resume-item">
                <h4>High School</h4>
                <h5>2017 - 2021</h5>
                <p>
                  <em>Concepcion Integrated Secondary Level, Marikina</em>
                </p>
                <p>Graduated with honors.</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Student Assistant (Work Immersion)</h4>
                <h5>2022 - 2023</h5>
                <p>
                  <em>La Verdad Christian School</em>
                </p>
                <ul>
                  <li>Assisted students with device usage.</li>
                  <li>Taught programming fundamentals, including C++ and flow controls.</li>
                </ul>
              </div>
              <h3 className="resume-title">Skills</h3>
              <div className="resume-item">
                <ul>
                  <li>
                    <strong>Programming Languages:</strong> .NET, PHP, VB.NET, Python, Java, C++, C#, JavaScript, HTML, CSS, ASP
                  </li>
                  <li>
                    <strong>Database:</strong> Skilled in MySQL (design, implementation, optimization, management)
                  </li>
                  <li>
                    <strong>Tools & IDEs:</strong> GitHub, Visual Studio Code, MS Visual Studio
                  </li>
                  <li>
                    <strong>Other Skills:</strong> Leadership, critical thinking, collaboration
                  </li>
                </ul>
              </div>
              <h3 className="resume-title">Projects</h3>
              <div className="resume-item">
                <h4>AI Yoga App</h4>
                <h5>2025</h5>
                <p>
                  Developed a Laravel-based video generation system with AI integration. Created personalized videos based on user preferences and implemented backend AI algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;