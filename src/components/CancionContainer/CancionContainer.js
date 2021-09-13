import React, { Component } from 'react';
import Card from '../Card/Card';
import SearchbyName from '../SearchByName/SearchByName';

import './style.css'

export default class CancionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: [],
            filteredAlbums: [],
            index: 10
        }
    }
//Hacemos el llamado a la API de deezer apenas se monta el componente

componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
        .then(response => { return response.json() })
        .then(data => {
            console.log(data.data);
            //let personajes = data.results;

            //A la información que obtengo la guardo en el estado dentro de una propiedad
            this.setState({
                album: data.data
            })
        })
        .catch(error => console.log(error));
}
filtrarPorNombre(nombreAFiltrar){
    console.log(nombreAFiltrar);
    const arrayFiltrada = this.state.albums.filter(
       albums => albums.name.toLowerCase().includes(nombreAFiltrar.toLowerCase())
    );
    if(nombreAFiltrar === ""){
        this.setState({
            filteredAlbums: this.state.albums
        })
    } else {
        this.setState({
            filteredAlbums: arrayFiltrada
        })
    } 
}

render() {
    console.log("Me estoy renderizando!")
    console.log(this.state.album);

    //if ternario
    // condicion ? Se cumple : No se cumple

    return ( <div className = 'container'> 
    <SearchbyName />
    <button onClick={()=> this.addCards()}>Agregar mas Albumes</button>
    {this.state.datosFiltrados.length ===0 }
                  addCards(){
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?index=${this.set.index}&limit=10`)
                        .then(response=> response.json())
                        .then(data => {
                            let arrayPrevio = this.state.data;
                            let arrayActualizado = arrayPrevio.concat(data.data);
                            let indexActualizado = this.state.index + 10;
                            console.log(indexActualizado);
                            this.setState({
                                datos: arrayActualizado,
                                datosFiltrados: arrayActualizado,
                                index: indexActualizado
                            })
                    
                        })




                    }  
                </div>
                ,
        <div className = 'container'>
            <p className = 'buscador'>
                <SearchbyName filtrarPorNombre={(nombreAFiltrar)=>this.filtrarPorNombre(nombreAFiltrar)} />
                </p>
            <section className = 'albums'> 
            {this.state.album === [] ?
                //se cumple la condición
                < h4 > Cargando ... </h4>:
                //no se cumple la condición
                this.state.album.map((album, index) => {
                    return <Card key={index}
                    title={album.title}
                    cover_medium={album.cover_medium}
                    artist = {album.artist.name}
                    link = {album.link}
                    removerCancion = {(Card)=> this.removerCancion(Card)}

                 
                    />
                } 
               )
            }
            </section>
        </div>
    )
}

}