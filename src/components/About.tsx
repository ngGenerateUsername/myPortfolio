

export default function About()
{
    return (
     
     <section className="about section" style={{}} id="about">
        <h2 className="section-title" data-aos="zoom-in">About Me</h2>
        <span className="section-subtitle" data-aos="zoom-in">My introduction</span>

        <div className="about-container container grid">
            
            <div className="about-container-img" data-aos="fade-right">
                <img src="../../../public/img/bluecat.png" alt="About" className="about-container-imgAlt" />
            </div>    

            <div className="about-container-data" data-aos="fade-left">
                <p className="about-container-data-description">I am driven by a passion for technology and a keen
                    interest in exploring new methods and approaches.
                    I am a creative thinker who enjoys proposing ideas that streamline business processes and
                    enhance efficiency. With a strong background in both back-end and front-end development,
                    I am able to bring ideas to life and contribute to the development of innovative solutions.</p>

                    
                    {/* my edit */}
                    <div style={{fontSize:'12px',marginLeft:'5px',marginTop:'-30px'}} data-aos="zoom-out">
                     <span> <i className="fa fa-envelope" aria-hidden="true" style={{color:'#2174C6',fontSize:'14px'}}></i></span> &nbsp;
                    <span className="about-container-data-name">mbenhamouda099@gmail.com</span>
                    <br />
                    <br />
                    <span> <i className="fa fa-graduation-cap" style={{color:'#2174C6',fontSize:'14px'}}></i> </span>
                        <span>Software Engineering Student</span>

                        <br />
                        <br />
                    <span> <i className="fa fa-map-marker" style={{color:'#2174C6',fontSize:'14px'}}></i> </span>
                        <span>Tunisa, Bizerte - Ras el Jebel</span>
                        <br />
                        <br />
                    <span> <i className="fa fa-laptop-house" style={{color:'#2174C6',fontSize:'14px'}}></i> </span>
                        <span>In Search of an Internship</span>

                        
                        
                    </div>
                    <br />
                    {/* End my edit */}
                
                <div className="about-container-data-info">


                    <div>
                        <span className="about-container-data-info-title">08+</span>
                        <span className="about-container-data-name">Years <br /> experience</span>
                    </div>
                    <div>
                        <span className="about-container-data-info-title">10+</span>
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