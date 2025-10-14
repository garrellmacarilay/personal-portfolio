import React from 'react'

function Portfoilio() {
  return (
    <>
        <section id="portfolio" className="portfolio">
            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>
                   Welcome to my digital portfolio, a space where creativity meets purpose and vision turns into reality. I’m a passionate developer driven by the belief that success is built through hard work, discipline, and a fearless mindset. Every project you’ll see here reflects a piece of my journey from crafting intuitive web applications to experimenting with new technologies that push boundaries.
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

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div className="portfolio-content h-100">
                        <img
                        src="assets/img/Projects/Opendoor.jpg"
                        className="img-fluid"
                        alt=""
                        />
                        <div className="portfolio-info">
                        <h4>OpenDoor - In Progress</h4>
                        <p>Appointment System that provide schdules and availability of the PSAS Office</p>
                        <a
                            href="assets/img/Projects/Opendoor.jpg"
                            title="App"
                            data-gallery="portfolio-gallery-app"
                            className="glightbox preview-link"
                        >
                            <i className="bi bi-zoom-in" />
                        </a>
                        <a
                            href="https://github.com/garrellmacarilay/open-door"
                            title="More Details"
                            className="details-link"
                        >
                            <i className="bi bi-github" />
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div className="portfolio-content h-100">
                        <img
                        src="assets/img/Projects/BasaBata.png"
                        className="img-fluid"
                        alt=""
                        />
                        <div className="portfolio-info">
                        <h4>BasaBata E-book Website</h4>
                        <p>Web based orgranized Tagalog E-book </p>
                        <a
                            href="assets/img/Projects/BasaBata.png"
                            title="App"
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                        >
                            <i className="bi bi-zoom-in" />
                        </a>
                        <a
                            href="https://github.com/abeshalaesmas/basabata-app"
                            title="More Details"
                            className="details-link"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="bi bi-github" />
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-content h-100">
                        <img
                        src="assets/img/Projects/Rebook.png"
                        className="img-fluid"
                        alt=""
                        />
                        <div className="portfolio-info">
                        <h4>ReBook E-commerce Website</h4>
                        <p>School Supply E-commerce Website</p>
                        <a
                            href="assets/img/Projects/Rebook.png"
                            title="App"
                            data-gallery="portfolio-gallery-branding"
                            className="glightbox preview-link"
                        >
                            <i className="bi bi-zoom-in" />
                        </a>
                        <a
                            href="https://github.com/garrellmacarilay/Rebook"
                            title="More Details"
                            className="details-link"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="bi bi-github" />
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div className="portfolio-content h-100">
                        <img
                        src="assets/img/Projects/Noto.png"
                        className="img-fluid"
                        alt=""
                        />
                        <div className="portfolio-info">
                        <h4>Noto - Note App</h4>
                        <p>Authenticated Note App with CRUD Functions and Updatable Profile Information </p>
                        <a
                            href="assets/img/Projects/Noto.png"
                            title="App"
                            data-gallery="portfolio-gallery-book"
                            className="glightbox preview-link"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="bi bi-zoom-in" />
                        </a>
                        <a
                            href="https://github.com/garrellmacarilay/Noto_app"
                            title="More Details"
                            className="details-link"
                        >
                            <i className="bi bi-github" />
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div className="portfolio-content h-100">
                        <img
                        src="assets/img/Projects/Yoga.png"
                        className="img-fluid"
                        alt=""
                        />
                        <div className="portfolio-info">
                        <h4>AI Yoga App</h4>
                        <p>Generate Personlize Yoga Video based on user preference</p>
                        <a
                            href="assets/img/Projects/Yoga.png"
                            title="App"
                            data-gallery="portfolio-gallery-app"
                            className="glightbox preview-link"
                        >
                            <i className="bi bi-zoom-in" />
                        </a>
                        <a
                            href="#"
                            title="More Details"
                            className="details-link"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="bi bi-github" />
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div className="portfolio-content h-100">
                        <img
                        src="assets/img/Projects/Ownchain.png"
                        className="img-fluid"
                        alt=""
                        />
                        <div className="portfolio-info">
                        <h4>OwnChain - In Progress</h4>
                        <p>Social Block Chain Website</p>
                        <a
                            href="assets/img/Projects/Ownchain.png"
                            title="App"
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                        >
                            <i className="bi bi-zoom-in" />
                        </a>
                        <a
                            href="https://github.com/garrellmacarilay/BitWise-OwnChain"
                            title="More Details"
                            className="details-link"
                        >
                            <i className="bi bi-github" />
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-content h-100">
                        <img
                        src="assets/img/Projects/Agrinvest.png"
                        className="img-fluid"
                        alt=""
                        />
                        <div className="portfolio-info">
                        <h4>AGRiNVEST - In Progress</h4>
                        <p>Small Farmers Investment Platform </p>
                        <a
                            href="assets/img/Projects/Agrinvest.png"
                            title="App"
                            data-gallery="portfolio-gallery-branding"
                            className="glightbox preview-link"
                        >
                            <i className="bi bi-zoom-in" />
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfoilio