import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/footer';


function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Body />
        <Footer />
      </>
    </BrowserRouter>
  )
}


export default App;
