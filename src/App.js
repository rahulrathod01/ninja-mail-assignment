import React from 'react'
import './App.css';
import Navbar from './components/Navbar/navbar';
import BodySection1 from './components/BodySection/BodySection1';
import BodyBackground from './components/BodyBackground/BodyBackground';
import BodySection2 from "./components/BodySection/BodySection2";
import BodySection3 from './components/BodySection/BodySection3';
import BodySection4 from './components/BodySection/BodySection4';
import BodySection5 from './components/BodySection/BodySection5';
import BodySection6 from './components/BodySection/BodySection6';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <main>
      <Navbar/>
      <BodyBackground/>
      <BodySection1/> 
      <BodySection2/> 
      <BodySection3/> 
      <BodySection4/> 
      <BodySection5/> 
      <BodySection6/> 
      <Footer />
    </main>
  );
}

export default App;
