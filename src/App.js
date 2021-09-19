import React from 'react';
import imagen from './LogoA.png'
//import imagenfondo from './imagen.jpeg'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CancionContainer from "./components/CancionContainer/CancionContainer";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      
      <img src={imagen} alt="logo" className= "imglogo"/> 
     
      {/* <img className='fondo' src={imagenfondo} alt=""/><img className='fondo' src={imagenfondo} alt=""/> */}
       <NavBar/>
       <CancionContainer/>
       <Footer/>
       </div>
   
  );
}

export default App;


