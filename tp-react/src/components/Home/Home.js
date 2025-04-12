import React, { Component } from "react";
import Peliculas from "../peliculas/peliculas";
import Buscador from "../Buscador/Buscador";
import "./Home.css"
class Movies extends Component {
    constructor(props){
        super(props);
        this.state={
           info:[],
           playing:[],
           backUp:[]
        }
    }

    componentDidMount(){
        console.log("me monte")
       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d9e8474e58809c37dad25bc3341da3e5`)
        .then((resp)=> resp.json())
        .then((data)=>{console.log(data) 
            this.setState({info:data.results,backUp:data.results})})
        .catch((error) => console.log(error) )

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d9e8474e58809c37dad25bc3341da3e5`)
        .then((resp)=> resp.json())
        .then((data)=>{console.log(data) 
            
            this.setState({playing:data.results})})
           
        .catch((error) => console.log(error) )

    }
   
    componentDidUpdate(){
        console.log(this.state.info);  
    console.log(this.state.playing);
      }

    filtrarPeliculas(busquedaPelicula){
        const peliculasBusqueda = this.state.backUp.filter((elem) => 
            elem.title.toLowerCase().includes(busquedaPelicula.toLowerCase()))
        this.setState({playing: peliculasBusqueda})
    }

    render(){
        console.log("estoy renderizado");
        return(
            <>
                <Buscador filtro={(busqueda) => this.filtrarPeliculas(busqueda)}/>
                <h1>Lo mejor de la semana</h1>

                <section>
                    {
                        this.state.info.length === 0 ?
                        <h1>Cargando</h1>
                        :
                        this.state.info.map((elm, idx) => 
                        <Peliculas pelis={elm} key={idx + elm.id} /> )

                    }
                </section>
                <h1>En cartelera</h1>
                <section>
                    {
                        this.state.playing.length === 0 ?
                        <h1>Cargando</h1>
                        :
                        this.state.playing.map((elm, idx) => 
                        <Peliculas pelis={elm} key={idx + elm.id} /> )
                    }
                </section>
            </>

        )
        
    }

}



export default Movies