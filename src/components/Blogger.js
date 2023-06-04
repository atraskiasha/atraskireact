/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import './Upcoming.css';
// import './Blogger.css';
import { Link} from 'react-router-dom';
import blogger1 from './imagegallery/Piyush-1.jpg'
import blogger2 from './imagegallery/Sumedha-1.jpg'
import blogger3 from './imagegallery/Simran-2.jpg'
import blogger4 from './imagegallery/81829159_746328929187181_7991821624035015901_n.jpg'
import blogger5 from './imagegallery/118189043_650084005620930_6818501205128761498_n.jpg'
import blogger6 from './imagegallery/ishani.jpg'
import blogger7 from './imagegallery/IMG_20200301_135909_Bokeh-1-scaled.jpg'
import blogger8 from './imagegallery/vishnu.jpg'
import Upcoming from './Upcoming';

// import bloger from '../components/imagegallery/blogger.png';


const Blogger = () => {

  // const [values ,  setValues] = useState(1);

    // const Decrement = ()=>{
    //     setValues(values - 1);
    // }

    // const Increment = () =>{
    //     setValues(values + 1);
    // }


  return (
    <div>
      <h1 className="text-center text-white" style={{ margin: '20px' }}>Blogger's Mela</h1>
      <h3 className="text-center text-white" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3>

      {/* Gallery  */}
      <div className="bgallery_section">
    <div className="bgallery">
        <div className="bgallery-item">
          <img src={blogger1} alt="Image 1" />
          <div className="image-popups">PIYUSH RATHI</div>
        </div>
        <div className="bgallery-item">
          <img src={blogger2} alt="Image 2" />
          <div className="image-popups">SUMEDHA SHARMA</div>
        </div>
        <div className="bgallery-item">
          <img src={blogger3} alt="Image 3" />
          <div className="image-popups">SIMRAN POPTANI</div>
        </div>
        <div className="bgallery-item">
          <img src={blogger4} alt="Image 4" />
          <div className="image-popups">ANMOL WADHWANI</div>
        </div>

      </div>

      {/* <div style={{color:'#fff' , marginTop: '10%'}} className="center_div">
        <img src={fashion} width="300" height="300" alt='fashion'/>
      </div> */}

      <div className="bgallery">
        <div className="bgallery-item">
          <img src={blogger5} alt="Image 5" />
          <div className="image-popups">PRARTHANA JAGAN</div>
        </div>
        <div className="bgallery-item">
          <img src={blogger6} alt="Image 6" />
          <div className="image-popups">ISHANI MITRA</div>
        </div>
        <div className="bgallery-item">
          <img src={blogger7} alt="Image 7" />
          <div className="image-popups">HUMA JOAD</div>
        </div>
        <div className="bgallery-item">
          <img src={blogger8} alt="Image 8" />
          <div className="image-popups">VISHNU KAUSHAL</div>
        </div>
        </div>
        
        </div>
      
   {/* // */}
   <Upcoming />
   {/* //    */}
      

      <h2 className="text-white text-center" style={{ margin: '50px' }}>What Falls Us Apart</h2>
      <p className="text-white text-center" style={{ margin: '50px' }}>Bloggers Mela has become a highly anticipated and sought-after event for bloggers in
        India, having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.
        Bloggers Mela truly encapsulates the spirit of community, creativity, and collaboration
        within the blogging industry.</p>


      <h3 className=" text-white text-center" style={{ margin: '50px' }}>Perks of Registering for Bloggers Mela:</h3>
      <ul className="circle text-white text-center" style={{ margin: '50px', position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <h6>● Be a member of AtBuzz bloggers community</h6>
        <h6>● Networking with other bloggers</h6>
        <h6>● Direct contacts with Brands</h6>
        <h6>● Be a part of a fun-filled event</h6>

      </ul>

      



       {/* footer starts  */}
       <footer className=" text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p><i className="fa fa-envelope"></i> Email: atraskiabhyudaymajhi@gmail.com</p>
              <p><i className="fa fa-phone"></i> Contact No: 9163720198</p>
              <p><i className="fa fa-phone"></i> Contact No: 7596009785</p>
            </div>
            <div className="col-md-6 text-md-right">
              <p>Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p>Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
              <Link className="footer-link" to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/*  footer ends  */}

    </div>
  )
}

export default Blogger