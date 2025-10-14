import React from 'react'

function Contact() {
  return (
    <>
        <div className="floating-modal">
          <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p>
                Feel free to reach out for any inquiries, collaborations, or
                opportunities. I look forward to connecting with you!
              </p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-1">
                <div className="col-lg-12">
                  <div className="info-wrap">
                    <div className="info-grid">
                      <div
                        className="info-item d-flex"
                        data-aos="fade-up"
                        data-aos-delay={200}
                      >
                        <i className="bi bi-geo-alt flex-shrink-0" />
                        <div>
                          <h3>Visit Me</h3>
                          <p>Marikina City, Philippines</p>
                        </div>
                      </div>
                      <div
                        className="info-item d-flex"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <i className="bi bi-linkedin flex-shrink-0" />
                        <div>
                          <h3>Linkedin</h3>
                          <p>Garrell Macarilay</p>
                        </div>
                      </div>
                      <div
                        className="info-item d-flex"
                        data-aos="fade-up"
                        data-aos-delay={400}
                      >
                        <i className="bi bi-envelope flex-shrink-0" />
                        <div>
                          <h3>Email Me</h3>
                          <p>gmacarilay1@gmail.com</p>
                        </div>
                      </div>
                      <div
                        className="info-item d-flex"
                        data-aos="fade-up"
                        data-aos-delay={500}
                      >
                        <i className="bi bi-facebook flex-shrink-0" />
                        <div>
                          <h3>Facebook</h3>
                          <p>Macarilay Garrell</p>
                          <p>{"(Preferable Contact)"}</p>
                        </div>
                      </div>
                      <div
                        className="info-item d-flex"
                        data-aos="fade-up"
                        data-aos-delay={300}
                      >
                        <i className="bi bi-telephone flex-shrink-0" />
                        <div>
                          <h3>Call Me</h3>
                          <p>63+ 9195947844</p>
                        </div>
                      </div>
                      <div
                        className="info-item d-flex"
                        data-aos="fade-up"
                        data-aos-delay={700}
                      >
                        <i className="bi bi-github flex-shrink-0" />
                        <div>
                          <h3>Github</h3>
                          <p>garrellmacarilay</p>
                        </div>
                      </div>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29353.31643306206!2d121.10470835000001!3d14.646734649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9a2777a00f9%3A0x6d36c8f429a12fc6!2sMarikina%2C%20Metro%20Manila!5e1!3m2!1sen!2sph!4v1760320527304!5m2!1sen!2sph"
                      frameBorder={0}
                      style={{ border: 0, width: "100%", height: 270 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </>
  )
}

export default Contact