

export default function About()
{
    return (
     <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">My introduction</span>

        <div className="about-container container grid">
            <div className="about-container-img">
                <img src="../../../public/img/bluecat.png" alt="About" className="about-container-imgAlt" />
            </div>

            <div className="about-container-data">
                <p className="about-container-data-description">I am driven by a passion for technology and a keen
                    interest in exploring new methods and approaches.
                    I am a creative thinker who enjoys proposing ideas that streamline business processes and
                    enhance efficiency. With a strong background in both back-end and front-end development,
                    I am able to bring ideas to life and contribute to the development of innovative solutions.</p>

                <div className="about-container-data-info">
                    <div>
                        <span className="about-container-data-info-title">08+</span>
                        <span className="about-container-data-name">Years <br /> experience</span>
                    </div>
                    <div>
                        <span className="about-container-data-info-title">20+</span>
                        <span className="about-container-data-name">Completed <br /> project</span>
                    </div>
                    <div>
                        <span className="about-container-data-info-title">05+</span>
                        <span className="about-container-data-name">Companies <br /> worked</span>
                    </div>
                </div>
                <div className="about-buttons">
                    <a download="" href="pdf/Alexa-Cv.pdf" className="button button-flex">
                        Download CV <i className="fas fa-download button-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}