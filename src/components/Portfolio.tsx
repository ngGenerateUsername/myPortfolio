import { useState } from "react";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import './ModalEdit.css';

interface typeModalData {
    id:number;
    img:string;
    description:string;
    FrontEnd:string;
    BackEnd:string;
    DataBase:string;
    repoFront?:string;
    
}
export default function Portfolio()
{

    const modalDetailHelper:typeModalData[] = [{
        id:1,
        img:'img/TaskFlowApp.jpg',
        description:"The task management application I've crafted provides a comprehensive solution for supervisors to oversee and organize their team's tasks efficiently. Through a user-friendly dashboard interface, supervisors can seamlessly manage task allocation and track progress. This system also empowers employees with a mobile application, enabling them to access, update, and complete their assigned tasks on-the-go. The application's design promotes streamlined communication between supervisors and team members, fostering a more productive work environment. With a robust database foundation, the app ensures secure data management and real-time updates, facilitating collaborative workflows and enhancing overall productivity within the workplace.",
        FrontEnd:"Flutter",
        BackEnd:"Flask",
        DataBase:"postgresql",
        repoFront:""

    },

    {
        id:2,
        img:'img/coachify.jpg',
        description:"The developed web application for game coaching represents an innovative approach, fostering an effective connection between coaches and players. This platform stands out by offering tailored features for both parties involved. It enables coaches to provide personalized coaching services for specific games, catering directly to the individual needs of players. Simultaneously, players can apply for coaching lessons offered by these trainers, thereby creating a collaborative learning environment. The overarching goal of this application is to significantly enhance the gaming experience by focusing on skill development and improvement for both coaches and players. Through its specialized functionalities, the platform seeks to elevate gaming experiences and promote continuous learning within the gaming community.",
        BackEnd:"ASP.NET Core",
        FrontEnd:"Angular",
        DataBase:"Microsoft SQL Server"
    },
    {
        id:3,
        img:'img/rntt.jpg',
        description:"RNTT, as the pioneering website in Tunisia aiming to revolutionize the public transportation experience, focuses on integrating and optimizing transport data for enhanced user convenience. The platform strategically combines diverse transport provider data to offer users a comprehensive insight into routes, schedules, stations, and more, enabling streamlined and comfortable travel experiences. Within my role during the terminal internship, I contributed significantly by spearheading the development of a specialized dashboard application. This application efficiently manages the General Transit Feed Specification (GTFS) files sourced from the Tunisian transport agency. Serving as a centralized hub, the dashboard facilitates the seamless uploading and migration of GTFS files into a database, effectively consolidating and organizing essential data. The dashboard's intuitive interfaces, comprising tables, cards, and maps, simplify the complex process of managing transit-related information. This straightforward yet powerful tool empowers users to handle transportation data effectively, ensuring a user-friendly experience while centralizing crucial transportation information for RNTT's seamless functionality and expansion across Tunisia.",
        BackEnd:"Express typescript",
        FrontEnd:"Angular",
        DataBase:"MongoDb"
    }
]

    const [open,setOpen] = useState(false);
    const [content,setContent] = useState({
        id: 0,
        img: '',
        description: '',
        FrontEnd: '', // or set default values for these properties
        BackEnd: '',
        DataBase: '',
        repoFront: ''
    });


    const onOpenModal = (id:number)=>{ 
        return ()=>{
           const selectedContent:typeModalData|undefined = modalDetailHelper.find(c => c.id === id);
           if (selectedContent) {
            setContent((prevContent) => ({
              ...prevContent,
              ...selectedContent,
              repoFront: selectedContent.repoFront || '', // Ensuring a string value
            }));
            setOpen(true);
          }
    }

    
    };
    const onCloseModal = ()=>setOpen(false);


    return (
    <section className="portfolio section" id="portfolio">
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subtitle">Most recent work</span>
    
    <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">

                            {/* <!--==================== PORTFOLIO 1 ====================--> */}
            <div className="portfolio__content grid swiper-slide">
                <img src="img/rntt.jpg" alt="" className="portfolio__img" />

                <div className="portfolio__data">
                    <h3 className="portfolio__title">RNTT Dashboard</h3>
                    <p className="portfolio__description">
                    Managing GTFS (General Transit Feed Specification) files from the Tunisian transport agency.
                    </p>
                    <a href="#" className="button button--flex button--small portfolio__button" onClick={onOpenModal(3)}>
                        Details
                        <i className="uil uil-newspaper button__icon "></i>
                    </a>



                 
                </div>

              
            </div>
          

                        {/* <!--==================== PORTFOLIO 3 ====================--> */}
            <div className="portfolio__content grid swiper-slide">
                <img src="img/coachify.jpg" alt="" className="portfolio__img" />

                <div className="portfolio__data">
                    <h3 className="portfolio__title">Coachify</h3>
                    <p className="portfolio__description">
                    A Tailored Coaching Platform.
                    </p>
                    <a href="#" className="button button--flex button--small portfolio__button" onClick={onOpenModal(2)}>
                        Details
                        <i className="uil uil-newspaper button__icon "></i>
                    </a>

                
                 
                </div>
              
            </div>
    


                {/* <!--==================== PORTFOLIO 2 ====================--> */}
                <div className="portfolio__content grid swiper-slide">
                <img src="img/TaskFlowApp.jpg" alt="" className="portfolio__img" />

                <div className="portfolio__data">
                    <h3 className="portfolio__title">TaskFlowApp</h3>
                    <p className="portfolio__description">
                    TaskFlow Pro delivers a seamless and efficient solution for supervisors and their teams.
                    </p>
                    <a href="#" className="button button--flex button--small portfolio__button" onClick={onOpenModal(1)}>
                        Details
                        <i className="uil uil-newspaper button__icon "></i>
                    </a>



                 
                </div>

              
            </div>

  <Modal open={open} onClose={onCloseModal} center>
                  
                  <div className="services__modal-content" >
                      {/* <h4 className="services__modal-title">UI/UX <br /> Designer</h4>*/}
                
                      <img src={content.img} alt="" style={{marginTop:4}}/>
                    
                     <p style={{fontSize:14}}><br />{content.description}</p>
                          <br />
                       <h4>Technologies: <span className="lightMePlease">{content.FrontEnd} - {content.BackEnd} - {content.DataBase}</span> </h4>                  

                  </div>
             
                  </Modal>

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