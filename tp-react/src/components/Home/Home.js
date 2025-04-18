import React, { Component } from "react";
import Peliculas from "../peliculas/peliculas";
import Buscador from "../Buscador/Buscador";
import "./Home.css"
import Loader from "../Loader/Loader";

class Movies extends Component {
    constructor(props){
        super(props);
        this.state={
           info:[],
           playing:[],
           backupInfo: [],
           backupPlaying:[],
           loading: false
        }
    }

    componentDidMount(){
        console.log("me monte")
       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d9e8474e58809c37dad25bc3341da3e5`)
        .then((resp)=> resp.json())
        .then((data)=>{console.log(data) 
            this.setState({info:data.results, backupInfo:data.results})})
        .catch((error) => console.log(error) )

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d9e8474e58809c37dad25bc3341da3e5`)
        .then((resp)=> resp.json())
        .then((data)=>{console.log(data)            
            this.setState({playing:data.results, backupPlaying:data.results})})           
        .catch((error) => console.log(error) )

    }
   
    componentDidUpdate(){
        console.log(this.state.info);  
    console.log(this.state.playing);
    }

    filtrarPeliculas(busquedaPelicula){
        const peliculasBusqueda = this.state.backupInfo.filter((elem) => 
            elem.title.toLowerCase().includes(busquedaPelicula.toLowerCase()))
        this.setState({info: peliculasBusqueda})
    }
    filtropeli(busquedaPeli){
        const pelibusqueda = this.state.backupPlaying.filter((elem) =>
            elem.title.toLowerCase().includes(busquedaPeli.toLowerCase()))
        this.setState({playing:pelibusqueda})
        
    }

    render(){
        
        return(
            <>
                <h1 className="hUnoHome">Peliculas populares</h1>
                <Buscador filtro ={(busqueda) => this.filtrarPeliculas(busqueda)}/>

                <section>
                    {
                        this.state.info.length === 0 ?
                        <h1>Lo sentimos, en esta seccion no se encontraron reultados para su busqueda</h1>
                        :
                        this.state.info.slice(0, 5).map((elm, idx) => 
                        <Peliculas pelis={elm} key={idx + elm.id} /> )
                        

                    }
                    {this.state.loading && <Loader />}

                </section>

                <h1 className="hUnoHome">En cartelera</h1>
                <Buscador filtro={(busqueda) => this.filtropeli(busqueda)}/>

                <section>
                    {
                        this.state.playing.length === 0 ?
                        <h1>Lo sentimos, no se encontraron resultados para su busqueda</h1>
                        :
                        this.state.playing.slice(0, 5).map((elm, idx) => 
                        <Peliculas pelis={elm} key={idx + elm.id} /> )
                    }
                    {this.state.loading && <Loader />}

                </section>
            </>

        )
        
    }

}



export default Movies