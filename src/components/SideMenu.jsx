import React, { useState, useEffect } from 'react'

function SideMenu() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main .floating-modal')
      let currentSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50 // Adjust offset as needed
        const sectionHeight = section.offsetHeight
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.id // Ensure each section has a unique `id`
        }
      })

      // Special handling for the contact section
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        const contactTop = contactSection.offsetTop - 50
        const contactHeight = contactSection.offsetHeight
        if (
          window.scrollY >= contactTop &&
          window.scrollY < contactTop + contactHeight
        ) {
          currentSection = 'contact'
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

        <a
          href="index.html"
          className="logo d-flex align-items-center justify-content-center"
        >
          {/* <img src="assets/img/logo.png" alt="Logo">  */}
          <h1 className="sitename">Garrell Macarilay</h1>
        </a>

        <div className="social-links text-center">
          <a
            href="https://www.facebook.com/garrell.macarilay"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook" />
          </a>
          <a
            href="https://www.instagram.com/grrell_akts/"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram" />
          </a>
          <a
            href="https://github.com/garrellmacarilay"
            className="google-plus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/garrell-macarilay-a56a16300/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="#hero"
                className={activeSection === 'hero' ? 'active' : ''}
              >
                <i className="bi bi-house navicon" /> Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
              >
                <i className="bi bi-person navicon" /> About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={
                  activeSection === 'certificates' ? 'active' : ''
                }
              >
                <i className="bi bi-award navicon" /> Certificates
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeSection === 'portfolio' ? 'active' : ''}
              >
                <i className="bi bi-lightbulb navicon" /> Portfolio
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeSection === 'skills' ? 'active' : ''}
              >
                <i className="bi bi-code-slash navicon" /> Skills
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeSection === 'resume' ? 'active' : ''}
              >
                <i className="bi bi-file-earmark-text navicon" /> Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
              >
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