/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';


import logo1 from './images/bm.jpeg';
import logo2 from './images/ducati.jpeg';
import logo3 from './images/bmwi.jpeg';
import logo4 from './images/home3.jpeg';
import logo5 from './images/home4.webp';
import logo6 from './images/cme.jpeg';
import logo7 from './images/eazydiner-prime.png';
import logo8 from './images/mcmv.jpeg';
import logo9 from './images/travel.jpeg';

import logo10 from './images/atraski logo new -2.png';


const Main = () => {
  const texts = ['Passionate about digital marketing and ready to make an impact?', 'Looking for an exciting opportunity in the fast-paced world of digital marketing?', 'Ready to take your digital marketing skills to the next level and drive meaningful results?']; // Array of texts
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
      setCurrentText(texts[nextIndex]);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [currentIndex, texts]);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % texts.length;
    setCurrentIndex(nextIndex);
    setCurrentText(texts[nextIndex]);
  };

  return (
    <>
      {/* "homepage": "https://github.com/atraskiasha/atraskireact.git", */}

      <div class="container d-flex justify-content-center align-items-center" style={{ height: '100px', width: '400px', marginTop: '50px' }}>
        <div class="text-center">
          <img src={logo10} class="img-fluid m-4" alt="Description of the image" />
        </div>
      </div>


      <div className="background">
        <div className="content">
          <h1>Welcome to Atraski</h1>
          <h3 id="heading">Hello, World!
            We believe in inspiring India in a unique and innovative way. Every day,
            we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we
            have to offer.We promise to inspire and delight you every step of the way.</h3>
          {/* <p>Connect With Us:</p>
          <ul>
            <li><a href=""><i className="fa-brands fa-instagram instagram"></i></a></li>
            <li><a href=""><i className="fa-brands fa-whatsapp whatsapp"></i></a></li>
            <li><a href=""><i className="fa-brands fa-linkedin linkedin"></i></a></li>
          </ul> */}

          <Button variant="secondary" onClick={handleClick} style={{marginTop: '50px', width:'500px', height:'10vh'}}>
            {currentText}
          </Button>


        </div>
      </div>




      <div
        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: '1600px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >

      </div>

      <div className="container2"
        style={{
          backgroundImage: `url(${logo2})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        <img src="images/imageb.jpg" alt="" />
      </div>

      <div
        style={{
          backgroundImage: `url(${logo3})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        {/* <h1>My component with inline background image</h1> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${logo8})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        {/* <h1>My component with inline background image</h1> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${logo4})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        {/* <h1>My component with inline background image</h1> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${logo5})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        {/* <h1>My component with inline background image</h1> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${logo7})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        {/* <h1>My component with inline background image</h1> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${logo9})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        {/* <h1>My component with inline background image</h1> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${logo6})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        {/* <h1>My component with inline background image</h1> */}
      </div>
      <div
        style={{
          backgroundImage: `url(${logo7})`,
          backgroundSize: '1550px',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
        {/* <h1>My component with inline background image</h1> */}
      </div>


    </>


  )
}

export default Main
