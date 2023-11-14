

export default function Skills()
{
    return (
        <section className="skills section" style={{marginTop:''}} id="skills">
            <h2 className="section__title" data-aos="zoom-in">Skills</h2>
            <span className="section__subtitle" data-aos="zoom-in">My technical level</span>

            <div className="skills__container container grid" style={{marginTop:'100px'}}>
                <div data-aos="fade-right">
                    {/* <!-- SKILLS 1 --> */}
                    <div className="skills__content skills__close">

                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Front-End</h1>
                                <span className="skills__subtitle">Frameworks</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Angular</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__90"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills_name">React</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__70"></span>
                                </div>
                            </div>


                        </div>

                    </div>


                    {/* <!-- devOPs --> */}
                    <div className="skills__content skills__close">

                        <div className="skills__header">
                            <i className="uil uil-setting skills__icon"></i>
                            <div>
                                <h1 className="skills__title">DevOps</h1>
                                <span className="skills__subtitle">Tools</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Jenkins</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__80"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Git</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__90"></span>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

                <div data-aos="fade-left">

                    {/* <!-- SKILLS 2 --> */}
                    <div className="skills__content skills__open">

                        <div className="skills__header">
                            <i className="uil uil-server skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Back-End</h1>
                                <span className="skills__subtitle">Frameworks</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Express Js</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__90"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Spring Boot</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__80"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Laravel</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__70"></span>
                                </div>
                            </div>


                        </div>

                    </div>

                    {/* <!-- SKILLS 3 --> */}
                    <div className="skills__content skills__close">

                        <div className="skills__header">
                            <i className="uil uil-bug skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Security</h1>
                                <span className="skills__subtitle">Tools</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">BurpSuite</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__80"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SonarQube</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__60"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Metasploit</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__90"></span>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </section>
    );
}