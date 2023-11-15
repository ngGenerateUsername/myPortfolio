

export default function About()
{
    return (
    <section className="about section" id="about">
    <h2 className="section__title">About Me</h2>
    <span className="section__subtitle">My introduction</span>

    <div className="about__container container">
        {/* <img src="img/bluecat.png" alt="" className="about__img" /> */}

        <div className="about__data">
            <p className="about__description">
            I am driven by a passion for technology and a keen interest in exploring new methods and approaches.
                     I am a creative thinker who enjoys proposing ideas that streamline business processes and
                     enhance efficiency. With a strong background in both back-end and front-end development,
                     I am able to bring ideas to life and contribute to the development of innovative solutions.
            </p>
            
                          {/* my edit */}
                  {/* <div style={{fontSize:'12px',marginLeft:'5px',marginTop:'-30px'}} data-aos="zoom-out">
                     <span> <i className="uil uil-fast-mail" aria-hidden="true" style={{color:'#2174C6',fontSize:'20px'}}></i></span> &nbsp;
                   <span className="about-container-data-name">mbenhamouda099@gmail.com</span>
                   <br />
                   <br />
                    <span> <i className="uil uil-user" style={{color:'#2174C6',fontSize:'20px'}}></i> </span> &nbsp;
                        <span>Software Engineering Student</span>

                        <br />
                         <br />
                     <span> <i className="uil uil-map" style={{color:'#2174C6',fontSize:'14px'}}></i> </span>
                        <span>&nbsp;Tunisa, Bizerte - Ras el Jebel</span>
                        <br />
                         <br />
                     <span> <i className="uil uil-file-search-alt" style={{color:'#2174C6',fontSize:'14px'}}></i> </span>
                        <span>&nbsp;In Search of an Internship</span>

                      
                        
                    </div>
                     <br /> */}
                    {/* End my edit */}


{/* 
            <div className="about__buttons">
                <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                    Download CV<i className="uil uil-download-alt button__icon"></i>
                </a>
            </div> */}
        </div>
    </div>
</section>
    );
}