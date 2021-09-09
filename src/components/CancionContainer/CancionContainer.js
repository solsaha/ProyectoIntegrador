import React, { Component } from 'react';
import SearchbyName from '../BusquedaNombre/SearchByName';

import './style.css'
export default class CancionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: []
        }
    }
//Hacemos el llamado a la API de deezer apenas se monta el componente

componentDidMount() {
    fetch('https://developers.deezer.com/api/explorer?url=chart/0/albums')
        .then(response => { return response.json() })
        .then(data => {
            //console.log(data.results);
            //let personajes = data.results;

            //A la información que obtengo la guardo en el estado dentro de una propiedad
            this.setState({
                album: data.results
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

    return (
        <div className = 'container'>
             <SearchbyName filtrarPorNombre={(nombreAFiltrar)=>this.filtrarPorNombre(nombreAFiltrar)} />
            {this.state.album === [] ?
                //se cumple la condición
                < h4 > Cargando ... </h4>:
                //no se cumple la condición
                this.state.album.map((album, index) => {
                    return <album key={index}
                    title={album.title}
                    cover={album.cover_medium}
                    genero = {album.genre_id}
                    artist = {album.artist}
                    // removerPersonaje = {(name)=>this.removerPersonaje(name)}
                    />
                })
            }
        </div>
    )
}

}