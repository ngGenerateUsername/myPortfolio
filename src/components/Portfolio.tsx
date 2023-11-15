import { useState } from "react";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import './ModalEdit.css';
export default function Portfolio()
{

    const [open,setOpen] = useState(false);
    
    const onOpenModal = ()=>setOpen(true);
    const onCloseModal = ()=>setOpen(false);


    return (
    <section className="portfolio section" id="portfolio">
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subtitle">Most recent work</span>
    
    <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
            {/* <!--==================== PORTFOLIO 1 ====================--> */}
            <div className="portfolio__content grid swiper-slide">
                <img src="img/TaskFlowApp.jpg" alt="" className="portfolio__img" />

                <div className="portfolio__data">
                    <h3 className="portfolio__title">TaskFlowApp</h3>
                    <p className="portfolio__description">
                    {/* TaskFlow Pro is a dynamic mobile application at the forefront of modern task management.
                    With its powerful combination of Flask for a robust backend, Flutter for an intuitive frontend, and PostgreSQL for secure data storage, */}
                    TaskFlow Pro delivers a seamless and efficient solution for supervisors and their teams.
                    </p>
                    <a className="button button--flex button--small portfolio__button" onClick={onOpenModal}>
                        Details
                        <i className="uil uil-newspaper button__icon "></i>
                    </a>

                    <Modal open={open} onClose={onCloseModal} center>
                  
                    <div className="services__modal-content" >
                        {/* <h4 className="services__modal-title">UI/UX <br /> Designer</h4>*/}
                  
                        <img src="img/TaskFlowApp.jpg" alt="" style={{marginTop:4}}/>
                      
                       <p><br />The task management application I've crafted provides a comprehensive solution for supervisors to oversee and organize their team's tasks efficiently. Through a user-friendly dashboard interface, supervisors can seamlessly manage task allocation and track progress. This system also empowers employees with a mobile application, enabling them to access, update, and complete their assigned tasks on-the-go. The application's design promotes streamlined communication between supervisors and team members, fostering a more productive work environment. With a robust database foundation, the app ensures secure data management and real-time updates, facilitating collaborative workflows and enhancing overall productivity within the workplace.</p>
                            <br />
                         <h4>FrontEnd: <span className="lightMePlease">Flutter</span> </h4>
                         <h4>BackEnd: <span className="lightMePlease">Flask</span> </h4>
                         <h4>DataBase: <span className="lightMePlease">Postgresql</span></h4>

                    
                        <h4> <i className="uil uil-github" style={{fontSize:20}}></i>: &nbsp;<span className="lightMePlease" > <a href="https://github.com/ngGenerateUsername/Flask-PPG"  target="_blank">BackEnd</a> <a href="https://github.com/ngGenerateUsername/Flask-PPG" target="_blank">FrontEnd</a> </span></h4>



                    </div>
               
                    </Modal>

                 
                </div>

              
            </div>
    
        </div>
        <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>
        
        <div className="swiper-pagination"></div>
    </div>

</section>

    )
}