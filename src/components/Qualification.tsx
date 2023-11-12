

export default function Qualification() {
    return (
        <section className="qualification section">
            <h2 className="section-title">Qualification</h2>
            <span className="section-subtitle">My personel journey</span>

            <div className="qualification-container container">
    <div className="qualification-tabs">
        <div className="qualification-tabs-button button-flex" data-target="#education"><i className="fas fa-graduation-cap qualification-icon" aria-hidden="true"></i>Education</div>
        <div className="qualification-tabs-button button-flex qualification-active" data-target="#work"><i className="fas fa-briefcase qualification-icon" aria-hidden="true"></i>Experience</div>
    </div>
    <div className="qualification-sections">
        <div className="qualification-content" data-content="true" id="education">
            <div className="qualification-data">
                <div className="qualification-data-alt">
                    <h3 className="qualification-title">Software Engineering</h3><span className="qualification-subtitle">SESAME - University</span>
                    <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> 2021 - 2024</div>
                </div>
                <div><span className="qualification-rounder"></span><span className="qualification-line"></span></div>
            </div>
            <div className="qualification-data">
                <div></div>
                <div><span className="qualification-rounder"></span></div>
                <div className="qualification-data-alt">
                    <h3 className="qualification-title">IT</h3><span className="qualification-subtitle">ISET bizerte - Institute</span>
                    <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> 2017 - 2020</div>
                </div>
            </div>
        </div>
        <div className="qualification-content qualification-active" data-content="true" id="work">
            <div className="qualification-data">
                <div className="qualification-data-alt">
                    <h3 className="qualification-title"> Web Developer</h3><span className="qualification-subtitle">BI DATA CONSULTING TUNISIE - Internship</span>
                    <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> Jul 2023 - Sep 2023</div>
                </div>
                <div><span className="qualification-rounder"></span><span className="qualification-line"></span></div>
            </div>
            <div className="qualification-data">
                <div></div>
                <div><span className="qualification-rounder"></span><span className="qualification-line"></span></div>
                <div className="qualification-data-alt">
                    <h3 className="qualification-title">Final Year Internship</h3><span className="qualification-subtitle">SARL BOUQUINISTE - Internship</span>
                    <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> Feb 2021 - Jun 2021</div>
                </div>
            </div>
            <div className="qualification-data">
                <div className="qualification-data-alt">
                    <h3 className="qualification-title">Summer Internship</h3><span className="qualification-subtitle"> STIR - Internship</span>
                    <div className="qualification-calendar"><i className="fas fa-calendar-alt" aria-hidden="true"></i> Jan 2020 - Feb 2020</div>
                </div>
                <div><span className="qualification-rounder"></span></div>
            </div>
        </div>
    </div>
</div>
        </section>
    );
}