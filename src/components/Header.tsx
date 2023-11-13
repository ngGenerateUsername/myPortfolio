import { useEffect } from "react";



export default function Header()
{
    useEffect(()=>{
//         /* DARK LIGHT THEME */
// const themeButton = document.getElementById("theme-button");
// console.log(themeButton)
// const darkTheme = "dark-theme";
// const iconTheme = "fa-sun";

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }

// // Activate / deactivate the theme manually with the button
// (themeButton)&& (themeButton.addEventListener("click", () => {
//   // Add or remove the dark / icon theme
//   console.log('im found here')
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// }));

    },[])
    return(
        <header className="header" id="header" >
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
                        {/* <li className="nav-item">
                            <a href="#services" className="nav-link">
                                <i className="fas fa-briefcase nav-link-icon"></i> Services
                            </a>
                        </li> */}
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
    
                
                    <i className="fas fa-moon change-theme" id="theme-button"></i>
    
                    <div className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-qrcode"></i>
                    </div>
                </div>
            </nav>
        </header>
    
    );
}