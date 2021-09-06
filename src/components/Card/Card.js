import React, { Component } from 'react';
import './style.css'


//Componente de presentación (sin lógica)
export default class Card extends Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        return (
            <div className = 'album'>
               {/* <img src={this.props.cover} alt=""/> */}
               {/* <h4> {this.props.name} </h4> */}
               {/* <h4> Estado: {this.props.estado}</h4> */}
               {/* <h4> Especie: {this.props.especie}</h4> */}
               {/* <button onClick={()=> this.props.removerPersonaje(this.props.name)}> Eliminar personaje</button> */}
            </div>
        )
    }
}