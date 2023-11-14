import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
//those just to deal with animation on scroll

import AOS from 'aos';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  useEffect(()=>{
    AOS.init()
   
  
  },[]);


  return (
    <>
      <Header />
      <main className='main'>
      
        <Home />

        <About />
        <Skills />
        <Qualification />
        {/* <Portfolio /> */}
      </main>
      <Contact />
      <Footer />
      <a href="#" className="scrollup" id="scroll-up">
        <i className="fas fa-arrow-up scrollup-icon"></i>
    </a>

    


    </>
  )
}

export default App
