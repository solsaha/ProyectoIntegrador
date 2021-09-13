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
                mensaje: "cambiar orientacion"
            })}    
        
        }
        
        render() {
            return (
                <div className = 'bloque'>
                  <p>Orientacion:</p>
                   <p className='more' onClick={() => this.viewShow()}>{this.state.mensaje}</p>
                    <p className= {this.state.vision}> {this.props.link} </p>
                   
                </div>
            )
        }
    }