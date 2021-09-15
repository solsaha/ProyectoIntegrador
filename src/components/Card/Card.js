import React, { Component } from 'react';
import './style.css'


//Componente de presentación (sin lógica)
export default class Card extends Component {
    constructor(props){
         super(props);
         this.state = {
            clase: 'hide',
            mensaje: 'Ver más'

        }
     }
//Funcion o método que es llamado cuando se hace click en "ver mas o ver menos"
handleShow(){
    if (this.state.clase === 'hide'){
        this.setState({
            clase: 'show',
            mensaje: "Ver menos"

        })
        } else {
        this.setState({
            clase: 'hide',
            mensaje: "Ver más"
        })   
    }
}

    render() {
        return (
            <div className = 'info'>
               {<img src={this.props.cover_medium} alt=""/> }
               { <h4> Album: {this.props.title} </h4> }
               { <h4> Artista: {this.props.artist}</h4> }
               <p className='more' onClick={() => this.handleShow()}>{this.state.mensaje}</p>
                <h5 className={this.state.clase}>Id: {this.props.id} </h5>
                <a href={this.props.link} className= {this.state.clase}> Ir a la descripción </a>
                <br></br>
                <a href= {this.props.tracklist} className={this.state.clase}>Escuchar la tracklist</a>

                 <button onClick={()=> this.props.removerAlbum(this.props.title)}> Remover</button> 
            </div>
        )
    }
}