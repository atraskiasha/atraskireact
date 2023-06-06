import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Hero from './components/Hero';
import Section1 from './components/About';
import Perks from './components/perks';



function App() {
  return (
    <>
      <Hero />
      <Section1 />
      <Perks/>
    </>
  );
}

export default App;
