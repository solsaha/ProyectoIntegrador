import React, { Component } from 'react';
import Card from '../Card/Card';
import SearchbyName from '../SearchByName/SearchByName';

import './style.css'

export default class CancionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            filteredAlbums: [],
            index: 10,
            cargando: true,
            orientation: "row",
            
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
                albums: data.data,
                filteredAlbums: data.data,
                cargando: false
            })
        })
        .catch(error => console.log(error));
}
filtrarPorNombre(nombreAFiltrar){
    console.log(nombreAFiltrar);
    const arrayFiltrada = this.state.albums.filter(
       albums => albums.title.toLowerCase().includes(nombreAFiltrar.toLowerCase())
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
addCards(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?index=${this.state.index}&limit=10`)
    .then(response=> response.json())
    .then(data => {
        let indexActualizado = this.state.index + 10;
        console.log(indexActualizado);
        this.setState({
            albums: this.state.albums.concat(data.data),
            filteredAlbums: this.state.filteredAlbums.concat(data.data),
            index: indexActualizado
        })

    })

}  

removerAlbum (title){
    const albumsFiltrados = this.state.albums.filter (album => album.title !== title)
    this.setState({
        albums: albumsFiltrados ,
        filteredAlbums: albumsFiltrados
        
    })
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
    console.log("Me estoy renderizando!")
    console.log(this.state.albums);

    //if ternario
    // condicion ? Se cumple : No se cumple

    return ( 
        <div className = 'container'> 
            <SearchbyName filtrarPorNombre = {(nombre)=> this.filtrarPorNombre(nombre)}
            />
            <button onClick={()=> this.addCards()}>Agregar más albums</button>
            <button onClick={()=> this.changeOrientation()}>Cambiar orientación</button>
            <section className = {`albums-${this.state.orientation}`}>
            {this.state.cargando? <p>Cargando...</p> : null} 
            {this.state.filteredAlbums.length ===0 ?
                <p>No hay datos</p>
            :
                this.state.filteredAlbums.map((album, index) => {
                    return <Card key={index}
                        title={album.title}
                        cover_medium={album.cover_medium}
                        artist = {album.artist.name}
                        link = {album.link}
                        id= {album.id}
                        position= {album.position}
                        orientation = {this.state.orientation}
                        removerAlbum = {(Card)=> this.removerAlbum(Card)}
                    />
                } )
                
            }
            </section>
        </div>
    )
}
                
             
       
    
}