/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';


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
  

  return (
    <>
      {/* "homepage": "https://github.com/atraskiasha/atraskireact.git", */}

      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100px', width: '400px', marginTop: '50px' }}>
        <div className="text-center">
          <img src={logo10} className="img-fluid m-4" alt="Description of the image" />
        </div>
      </div>


      <div className="background">
        <div className="content">
          <h1>Welcome to Atraski</h1>
          <h3 id="heading" style={{marginTop:'-15px'}}>Hello, World!
            We believe in inspiring India in a unique and innovative way. Every day,
            we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we
            have to offer.We promise to inspire and delight you every step of the way.Atraski flourishing furiously over the past years is now proud to present a cabinet of successful events throughout all A tier cities of the country including open mics, fashion walks and walks promoting social causes, bloggers meets, art confluences along with travel meets and packaged tours all across India</h3>
          

<a href="/chat" class="containerchat">

          <div className="containerchat">
            <div id="chatbot">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div id="chatbot-corner"></div>
            <div id="antenna">
              <div id="beam"></div>
              <div id="beam-pulsar"></div>
            </div>
          </div>
          </a>


        </div>
      </div>




      <div
        className="background-image-res"

        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: 'cover',
          backgroundRepeat:'no-repeat',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          
        }}
      >

      </div>
      

      <div className="container2"
        style={{
          backgroundImage: `url(${logo2})`,
          backgroundSize: 'cover',
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
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo8})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo4})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo5})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo7})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
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
      </div>
      


    </>




  )
}

export default Main
