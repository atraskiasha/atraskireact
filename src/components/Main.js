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

// import logo10 from './images/atraski logo new -2.png';


const Main = () => {
  const headings = ['Marketing Heading hfhjhdgfsfd1', 'Marketing Heading 2', 'Marketing Heading 3']; // Array of headings
const headingElement = document.getElementById('marketing-heading');
const dotsContainer = document.getElementById('dots-container');
let currentIndex = 0;

function animateHeading() {
  headingElement.textContent = headings[currentIndex];
  currentIndex = (currentIndex + 1) % headings.length;

  // Toggle visibility of the dots
  dotsContainer.classList.add('show-dots');
  setTimeout(() => {
    dotsContainer.classList.remove('show-dots');
  }, 1500);
}

// Call the animateHeading function every 2 seconds (adjust the duration as needed)
setInterval(animateHeading, 2000);

 



  return (
    <>
      {/* "homepage": "https://github.com/atraskiasha/atraskireact.git", */}

      {/* <div className="container d-flex justify-content-center align-items-center" style={{ height: '100px', width: '400px', marginTop: '50px' }}>
        <div className="text-center">
          <img src={logo10} className="img-fluid m-4" 
          style={{alignItems:'center'}}
          alt="Description of the image" />
        </div>
      </div> */}


      <div className="background">
        <div className="content">
          <h1 style={{ fontSize: '40px' }}>Welcome to Atraski</h1>
          <h3 id="mainheading" style={{ marginTop: '-15px', fontSize: '20px' }}>Hello, World!
            We believe in inspiring India in a unique and innovative way. Every day,
            we offer a wide range of services across events, travel, blogging, and fashion to bring you the best of what we
            have to offer.We promise to inspire and delight you every step of the way.Atraski flourishing furiously over the past years is now proud to present a cabinet of successful events throughout all A tier cities of the country including open mics, fashion walks and walks promoting social causes, bloggers meets, art confluences along with travel meets and packaged tours all across India</h3>

          <a href="/chat" className="containerchat">
           

          <div className="container_mark">
  <div className="row">
    <div className="col">
      <h1 id="marketing-heading"></h1>
      <div id="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  </div>
</div>






          </a>


        </div>
      </div>




      <div
        className="background-image-res"

        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '80vh',
          position: 'relative',

        }}
      >

      </div>


      <div className="container2"
        style={{
          backgroundImage: `url(${logo2})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          height: '80vh',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo4})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo7})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo9})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          /* other CSS styles */
        }}
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${logo6})`,
          backgroundSize: '100% auto',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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
