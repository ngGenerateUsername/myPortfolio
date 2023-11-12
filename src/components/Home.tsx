
export default function Home()
{
    return (
        
        <section className="home section" id="home" >
        <div className="home-container container grid" >
            <div className="home-content grid" >
                <div className="home-social">
                    <a href="https://www.linkedin.com/in/ahmedbh97/" target="_blank" className="home-social-icon" data-aos="fade-up" data-aos-duration="500">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.hackerrank.com/profile/mbenhamouda099" target="_blank" className="home-social-icon" data-aos="fade-up" data-aos-duration="500">
                        <i className="fab fa-hackerrank"></i>
                    </a>
                    <a href="https://github.com/ngGenerateUsername" target="_blank" className="home-social-icon" data-aos="fade-up" data-aos-duration="500">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="home-img" >
                    <svg className="home-blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" data-aos="fade-left">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            <image className="home-blob-img" x='1' y='-25' xlinkHref="./../../public/img/mrblue.png" data-aos="fade-up" data-aos-duration="500"/>
                    
                        </g>
                    </svg>
                </div>
                <div className="home-data" data-aos="fade-right">
                    <h1 className="home-data-title">Hi, I'am Ahmed</h1>
                    <h3 className="home-data-subtitle">Back-End Developer</h3>
                    <p className="home-data-description">A Backend Developer with a passion for building efficient server-side systems that drive seamless and dynamic web experiences.</p>
                    <a href="#contact" className="button button-flex">
                        Contact Me <i className="fab fa-telegram-plane button-icon"></i>
                    </a>
                </div>
            </div>
            <div className="home-scroll">
                <a href="#about" className="home-scroll-button button-flex">
                    <span className="home-scroll-button-name">Scroll down</span>
                    <i className="fas fa-arrow-down home-scroll-button-arrow"></i>
                </a>
            </div>
        </div>
    </section>
  
    );
}