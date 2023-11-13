

export default function Skills()
{
    return (
        <section className="skills section" style={{marginTop:''}} id="skills">
            <h2 className="section-title" data-aos="zoom-in">Skills</h2>
            <span className="section-subtitle" data-aos="zoom-in">My technical level</span>

            <div className="skills-container container grid" style={{marginTop:'100px'}}>
                <div data-aos="fade-right">
                    {/* <!-- SKILLS 1 --> */}
                    <div className="skills-container-content skills-close">

                        <div className="skills-container-header">
                            <i className="fas fa-code skills-icon"></i>
                            <div>
                                <h1 className="skills-title">Front-End</h1>
                                <span className="skills-subtitle">Frameworks</span>
                            </div>
                            <i className="fas fa-angle-down skills-arrow"></i>
                        </div>

                        <div className="skills-list grid">

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Angular</h3>
                                    <span className="skills-number">90%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-angular"></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">React</h3>
                                    <span className="skills-number">70%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-react"></span>
                                </div>
                            </div>


                        </div>

                    </div>


                    {/* <!-- devOPs --> */}
                    <div className="skills-container-content skills-close">

                        <div className="skills-container-header">
                            <i className="fas fa-swatchbook skills-icon"></i>
                            <div>
                                <h1 className="skills-title">DevOps</h1>
                                <span className="skills-subtitle">Tools</span>
                            </div>
                            <i className="fas fa-angle-down skills-arrow"></i>
                        </div>

                        <div className="skills-list grid">

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Jenkins</h3>
                                    <span className="skills-number">80%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-jenkins"></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Git</h3>
                                    <span className="skills-number">90%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-git"></span>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

                <div data-aos="fade-left">

                    {/* <!-- SKILLS 2 --> */}
                    <div className="skills-container-content skills-open">

                        <div className="skills-container-header">
                            <i className="fas fa-server skills-icon"></i>
                            <div>
                                <h1 className="skills-title">Back-End</h1>
                                <span className="skills-subtitle">Frameworks</span>
                            </div>
                            <i className="fas fa-angle-down skills-arrow"></i>
                        </div>

                        <div className="skills-list grid">

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Express Js</h3>
                                    <span className="skills-number">90%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-express"></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Spring Boot</h3>
                                    <span className="skills-number">80%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-spring"></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Laravel</h3>
                                    <span className="skills-number">80%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-laravel"></span>
                                </div>
                            </div>


                        </div>

                    </div>

                    {/* <!-- SKILLS 3 --> */}
                    <div className="skills-container-content skills-close">

                        <div className="skills-container-header">
                            <i className="fas fa-swatchbook skills-icon"></i>
                            <div>
                                <h1 className="skills-title">Security</h1>
                                <span className="skills-subtitle">Tools</span>
                            </div>
                            <i className="fas fa-angle-down skills-arrow"></i>
                        </div>

                        <div className="skills-list grid">

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">BurpSuite</h3>
                                    <span className="skills-number">80%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-burpsuit"></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">SonarQube</h3>
                                    <span className="skills-number">60%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-SonarQube"></span>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-titles">
                                    <h3 className="skills-name">Metasploit</h3>
                                    <span className="skills-number">90%</span>
                                </div>
                                <div className="skills-bar">
                                    <span className="skills-percentage skills-metasploit"></span>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </section>
    );
}