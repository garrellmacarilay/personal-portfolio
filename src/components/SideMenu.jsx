import React from 'react'

function SideMenu() {
  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list" />

        <div className="profile-img">
          <img
            src="assets/img/my-profile-img.jpg"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>

        <a href="index.html" className="logo d-flex align-items-center justify-content-center">          
         {/* <img src="assets/img/logo.png" alt="Logo">  */}
          <h1 className="sitename">Garrell Macarilay</h1>
        </a>

        <div className="social-links text-center">
          <a href="https://www.facebook.com/garrell.macarilay" className="facebook" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook" />
          </a>
          <a href="https://www.instagram.com/grrell_akts/" className="instagram" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram" />
          </a>
          <a href="https://github.com/garrellmacarilay" className="google-plus" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" />
          </a>
          <a href="https://www.linkedin.com/in/garrell-macarilay-a56a16300/" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" />
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                <i className="bi bi-house navicon" /> Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bi bi-person navicon" /> About
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="bi bi-award navicon" /> Certificates
              </a>
            </li>
             <li>
              <a href="#portfolio">
                <i className="bi bi-lightbulb navicon" /> Portfolio
              </a>
            </li>
            <li>
              <a href="#skills">
                <i className="bi bi-code-slash navicon" /> Skills
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="bi bi-file-earmark-text navicon" /> Resume
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="bi bi-envelope navicon" /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default SideMenu