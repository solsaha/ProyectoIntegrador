import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CancionContainer from "./components/CancionContainer/CancionContainer";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
       <NavBar/>
       <CancionContainer/>
       <Footer/>
      
    </div>
  );
}

export default App;


