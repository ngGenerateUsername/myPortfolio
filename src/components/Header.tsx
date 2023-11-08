


export default function Header()
{
    return(
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav-logo">tryCatch</a>
    
                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active-link">
                                <i className="fas fa-home nav-link-icon"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                <i className="fas fa-user nav-link-icon"></i> About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                <i className="fas fa-file-alt nav-link-icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">
                                <i className="fas fa-briefcase nav-link-icon"></i> Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">
                                <i className="fas fa-image nav-link-icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                <i className="fas fa-envelope nav-link-icon"></i> Contactme
                            </a>
                        </li>
                    </ul>
                    <i className="fas fa-times nav-close" id="nav-close"></i>
                </div>
                <div className="nav-btns">
    
                    {/* <!-- Theme change button --> */}
                    <i className="fas fa-moon change-theme" id="theme-button"></i>
    
                    <div className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-qrcode"></i>
                    </div>
                </div>
            </nav>
        </header>
    
    );
}