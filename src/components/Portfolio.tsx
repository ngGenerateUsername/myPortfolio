

export default function Portfolio()
{


    return (
        <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="portfolio__container container swiper__container">
            <div className="swiper__wrapper">
                {/* <!-- PORTFOLIO 1 --> */}
                <div className="portfolio__content grid swiper__slide">
                    <img src="img/TaskFlowApp.jpg" alt="Portfolio" className="portfolio-img" />
                    <div className="portfolio-data">
                        <h3 className="portfolio-title">TaskFlowApp</h3>
                        {/* TaskFlow Pro is a dynamic mobile application at the forefront of modern task management.
                         With its powerful combination of Flask for a robust backend, Flutter for an intuitive frontend, and PostgreSQL for secure data storage,
                         TaskFlow Pro delivers a seamless and efficient solution for supervisors and their teams. */}
                        <p className="portfolio-description">Website adaptable to all devices, with ui components and
                            animated interactions.</p>
                        <a href="#" className="button button-flex button-small services-button">
                            Details
                        </a>

                        {/* <div className="services-modal">
                        <div className="services-modal-content">
                            <h4 className="services-modal-title">UI/UX <br /> Designer</h4>
                            <i className="fas fa-times services-modal-close"></i>

                            <div className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="far fa-check-circle services-modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="far fa-check-circle services-modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="far fa-check-circle services-modal-icon"></i>
                                    <p>I create ux element interactions.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="far fa-check-circle services-modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                {/* PORTFOLIO 2
                <div className="portfolio-content grid swiper-slide">
                    <img src="img/portfolio2.jpg" alt="Portfolio" className="portfolio-img" />
                    <div className="portfolio-data">
                        <h3 className="portfolio-title">Brand Design</h3>
                        <p className="portfolio-description">Website adaptable to all devices, with ui components and
                            animated interactions.</p>
                        <a href="#" className="button button-flex button-small portfolio-button">
                            Demo <i className="fas fa-arrow-right button-icon"></i>
                        </a>
                    </div>
                </div>
                 PORTFOLIO 3
                <div className="portfolio-content grid swiper-slide">
                    <img src="img/portfolio3.jpg" alt="Portfolio" className="portfolio-img" />
                    <div className="portfolio-data">
                        <h3 className="portfolio-title">Online Store</h3>
                        <p className="portfolio-description">Website adaptable to all devices, with ui components and
                            animated interactions.</p>
                        <a href="#" className="button button-flex button-small portfolio-button">
                            Demo <i className="fas fa-arrow-right button-icon"></i>
                        </a>
                    </div>
                </div> */}
            </div>
            {/* <!-- Add Arrow --> */}
            <div className="swiper-button-next">
                <i className="fas fa-angle-right swiper-portfolio-icon"></i>
            </div>
            <div className="swiper-button-prev">
                <i className="fas fa-angle-left swiper-portfolio-icon"></i>
            </div>
            {/* <!-- Add Pagination --> */}
            <div className="swiper-pagination"></div>
        </div>
    </section>
    )
}