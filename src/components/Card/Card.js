import React, { Component } from 'react';
import './style.css'


//Componente de presentación (sin lógica)
export default class Card extends Component {
    constructor(props){
         super(props)
     }

    render() {
        return (
            <div className = 'album'>
               {<img src={this.props.cover_medium} alt=""/> }
               { <h4> Nombre del album:{this.props.title} </h4> }
               { <h4> Género: {this.props.genre_id}</h4> }
               { <h4> Artista: {this.props.artist}</h4> }
               { <h4> Link al album: {this.props.link}</h4> }
               {/* <button onClick={()=> this.props.removerPersonaje(this.props.name)}> Eliminar personaje</button> */}
            </div>
        )
    }
}