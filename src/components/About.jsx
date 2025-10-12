import React from 'react';

function About() {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          I’m a dream-driven individual with a bold vision for the future — one that fuels my determination, discipline, and relentless hard work. As a 3rd-year student, I’m in the grind, turning challenges into stepping stones and lessons into growth. I believe that failure is not the opposite of success, but an essential part of it. Every setback strengthens my resolve and brings me closer to the life I’m working to build. My journey is far from over, but every day, I’m moving forward — one step, one effort, one dream at a time.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src="assets/img/my-profile-img.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 content">
            <h2>Developer &amp; Web3 Developer.</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Name:</strong> <span>Garrell B. Macarilay</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Phone:</strong> <span>+63 9195947844</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                    <span>Marikina, Philippines</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Motto:</strong>{" "}
                    <span>Keep Moving Forward</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                    <span>21</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Course:</strong> <span>BS Information System</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Email:</strong> <span>gmacarilay1@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Hobbies:</strong> <span>Guitar, Drawing, Cycling, Workout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;