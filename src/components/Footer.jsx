import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" py-4 ">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

        {/* Center Links */}
        <ul className="list-inline mb-3 mb-md-0">
          <li className="list-inline-item mx-2">
            <a href="#projects" className="text-light text-decoration-none hover-underline">
              Projects
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#contact" className="text-light text-decoration-none hover-underline">
              Contact
            </a>
          </li>
        </ul>

        <h5 className="mb-3 mb-md-0">
          © {year} Garrell Macarilay | Portfolio
        </h5>

        {/* Right Socials */}
        <div className="d-flex gap-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-light fs-4"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;