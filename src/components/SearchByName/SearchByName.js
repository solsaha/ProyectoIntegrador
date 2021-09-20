import React, { Component } from 'react';
import './style.css'

export default class searchByName extends Component {
    constructor (){
        super();
        this.state = {
            valorInput: ""
        }
    }

    prevenirSubmit(evento){
        evento.preventDefault();
    }

    capturaInput(evento){
        console.log(evento.target.value);
        this.setState({
            valorInput: evento.target.value 
        },
        () => this.props.filtrarPorNombre(this.state.valorInput)
        )
    }

    render(){
        return(
            <section className = 'buscador'>
            <form onSubmit={(evento)=> this.prevenirSubmit(evento)}>
                <label>Busque: </label>
                <input onChange={(evento)=> this.capturaInput(evento) } type="text" />
            </form>
            </section>
        )
    }
}