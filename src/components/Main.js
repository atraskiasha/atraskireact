import React from 'react'

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
    <div class="container d-flex justify-content-center align-items-center" style={{height: '100px',width:'400px', marginTop:'50px'}}>
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
