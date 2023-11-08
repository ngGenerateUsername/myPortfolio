import './../public/css/swiper-bundle.min.css'
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';

function App() {


  useEffect(()=>{

    const scripts:string[] = [
      "https://kit.fontawesome.com/027d3564f6.js",
      "./../public/js/swiper-bundle.js",
      "./../public/js/main.js"
    ];

    scripts.forEach(element => {
      const script:HTMLScriptElement = document.createElement("script");
      script.src = element;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    });
  
  },[]);

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
