import React, { Component } from 'react';


import './style.css'
export default class NavBar extends Component {
    constructor(props){
         super(props);
         this.state = {
            vision: 'vertical',
            aviso: 'columnas'

        }
     }
     viewShow(){
        if (this.state.vision === 'vertical'){
            this.setState({
                vision: 'columnas',
                mensaje: "cambiar orientación"
    
            })
            } else {
            this.setState({
                vision: 'vertical',
                mensaje: "cambiar de nuevo orientacion"
            })}    
        
        }
        
        render() {
            return (
                <div className = 'bloque'>
                 <h1>Go Talent</h1>
                   <p className='more' onClick={() => this.viewShow()}> Orientacion {this.state.mensaje}</p>
                    <p className= {this.state.vision}> {this.props.link} </p>
                   
                </div>
            )
        }
    }