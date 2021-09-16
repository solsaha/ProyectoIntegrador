import React, { Component } from 'react';
import './style.css'


//Componente de presentación (sin lógica)
export default class Card extends Component {
    constructor(props){
         super(props);
         this.state = {
            clase: 'hide',
            mensaje: 'Ver más',
           orientation: "row",
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

 changeOrientation(){
    if(this.state.orientation === "row"){
        this.setState({
            orientation: "column"
        })
    } else {
        this.setState({
            orientation: "row"
    })
    }
    }
     

    render() {
        return (
            <div className = {`info-${this.props.orientation}`}>
               {<img src={this.props.cover_medium} alt=""/> }
             <div className = 'cardInfo'> { <h4> Album: {this.props.title} </h4> }
               { <h4> Artista: {this.props.artist}</h4> }
               <p className='more' onClick={() => this.handleShow()}>{this.state.mensaje}</p>
                <h5 className={this.state.clase}>Id: {this.props.id} </h5>
                <a href={this.props.link} className= {this.state.clase}> Ir a la descripción </a>
                <br></br>
                <h5 className={this.state.clase}>Position: {this.props.position} </h5>

                 <button onClick={()=> this.props.removerAlbum(this.props.title)}> Remover</button> 
            </div>
            </div>
        )
    }
}