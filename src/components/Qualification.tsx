

export default function Qualification() {
    return (
//         <section className="qualification section">
//             <h2 className="section__title">Qualification</h2>
//             <span className="section__subtitle">My personel journey</span>

//             <div className="qualification__container container">
//     <div className="qualification__tabs">
//     <div className="qualification__button button--flex qualification__active" data-target="#education">
//                     <i className="uil uil-graduation-cap qualification__icon"></i>
//                     Education
//                 </div>
//                 <div className="qualification__button button--flex" data-target="#work">
//                     <i className="uil uil-briefcase-alt qualification__icon"></i>
//                     Experience
//                 </div>
//     </div>
//     <div className="qualification__sections">
//         <div className="qualification__content qualification__active" data-content="true" id="education">
//             <div className="qualification__data">
//                 <div className="qualification-data-alt">
//                     <h3 className="qualification-title">Software Engineering</h3><span className="qualification-subtitle">SESAME - University</span>
//                     <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> 2021 - 2024</div>
//                 </div>
//                 <div><span className="qualification-rounder"></span><span className="qualification-line"></span></div>
//             </div>
//             <div className="qualification-data">
//                 <div></div>
//                 <div><span className="qualification-rounder"></span></div>
//                 <div className="qualification-data-alt">
//                     <h3 className="qualification-title">IT</h3><span className="qualification-subtitle">ISET bizerte - Institute</span>
//                     <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> 2017 - 2020</div>
//                 </div>
//             </div>
//         </div>
//         <div className="qualification-content qualification-active" data-content="true" id="work">
//             <div className="qualification-data">
//                 <div className="qualification-data-alt">
//                     <h3 className="qualification-title"> Web Developer</h3><span className="qualification-subtitle">BI DATA CONSULTING TUNISIE - Internship</span>
//                     <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> Jul 2023 - Sep 2023</div>
//                 </div>
//                 <div><span className="qualification-rounder"></span><span className="qualification-line"></span></div>
//             </div>
//             <div className="qualification-data">
//                 <div></div>
//                 <div><span className="qualification-rounder"></span><span className="qualification-line"></span></div>
//                 <div className="qualification-data-alt">
//                     <h3 className="qualification-title">Final Year Internship</h3><span className="qualification-subtitle">SARL BOUQUINISTE - Internship</span>
//                     <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> Feb 2021 - Jun 2021</div>
//                 </div>
//             </div>
//             <div className="qualification-data">
//                 <div className="qualification-data-alt">
//                     <h3 className="qualification-title">Summer Internship</h3><span className="qualification-subtitle"> STIR - Internship</span>
//                     <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> Jan 2020 - Feb 2020</div>
//                 </div>
//                 <div><span className="qualification-rounder"></span></div>
//             </div>
//         </div>
//     </div>
// </div>
//         </section>


<section className="qualification section">
<h2 className="section__title">Qualification</h2>
<span className="section__subtitle">My persolan journey</span>

<div className="qualification__container container">
    <div className="qualification__tabs">
        <div className="qualification__button button--flex qualification__active" data-target="#education">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
        </div>
        <div className="qualification__button button--flex" data-target="#work">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
        </div>
    </div>
    <div className="qualification__sections">
        {/* <!-- 1 --> */}
        <div className="qualification__content qualification__active" data-content id="education">
            {/* <!-- 1 --> */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Software Engineering</h3>
                    <span className="qualification__subtitle">SESAME - University</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2021 - 2024
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            {/* <!-- 2 --> */}
            <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder"></span>
                   
                </div>

                <div>
                    <h3 className="qualification__title">IT</h3>
                    <span className="qualification__subtitle">ISET bizerte - Institute</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2017 - 2020
                    </div>
                </div>
            </div>




        </div>
        {/* <!-- 2 --> */}
        <div className="qualification__content" data-content id="work">
            {/* <!-- 1 --> */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Web Developer</h3>
                    <span className="qualification__subtitle">BI DATA CONSULTING TUNISIE - Internship</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        Jul 2023 - Sep 2023
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            {/* <!-- 2 --> */}
            <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div>
                    <h3 className="qualification__title">Final Year Internship</h3>
                    <span className="qualification__subtitle">SARL BOUQUINISTE - Internship</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        Feb 2021 - Jun 2021
                    </div>
                </div>
            </div>

            {/* <!-- 3 --> */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Summer Internship</h3>
                    <span className="qualification__subtitle">STIR - Internship</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        Jan 2020 - Feb 2020
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
            </div>

        </div>
    </div>
</div>
</section>
    );
}