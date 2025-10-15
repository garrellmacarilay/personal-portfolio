import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" py-4 ">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

        <div className="d-flex gap-3"></div>
        <h5 className="mb-3 mb-md-0">
          © {year} Garrell Macarilay | Portfolio
        </h5>
        <div className="d-flex gap-3"></div>

      </div>
    </footer>
  );
}

export default Footer;