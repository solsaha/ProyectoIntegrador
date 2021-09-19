import React from 'react';
import './App.css';
import imagen from './LogoA.png'
import NavBar from './components/NavBar/NavBar';
import CancionContainer from "./components/CancionContainer/CancionContainer";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      
    <img src={imagen} alt="logo" className= "imglogo"/> 
    

     <NavBar/>
     <CancionContainer/>
     <Footer/>
     </div>
  );
}

export default App;


