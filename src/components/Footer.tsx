

export default function Footer()
{
    return(
        <footer className="footer">
    <div className="footer__bg">
        <div className="footer__container container grid">
            <div>
                <h1 className="footer__title">Ahmed</h1>
                <span className="footer__subtitle">FullStack developer</span>
            </div>

            <ul className="footer__links">
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Potfolio</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contactme</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/SiSpoof" target="_blank" className="footer__social">
                    <i className="uil uil-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/ahmed_bh.11" target="_blank" className="footer__social">
                    <i className="uil uil-instagram"></i>
                </a>
                <a href="https://www.twitter.com/" target="_blank" className="footer__social">
                    <i className="uil uil-twitter-alt"></i>
                </a>
            </div>

            <p className="footer__copy">&#169; Bedimcode. All right reserved</p>
        </div>
    </div>
</footer>

    );
}