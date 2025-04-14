import React, { Component } from "react";
import Peliculas from "../peliculas/peliculas";
import Buscador from "../Buscador/Buscador";
import Loader from "../Loader/Loader";
import "./UpComing.css"

class upcoming extends Component {
    constructor(props){
        super(props);
        this.state={
           playing:[],
           numeroPag: 2,
           backUpPlaying: [],
           filterValue:"",
           pelisFiltrado:[],  
           loading: false         

        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d9e8474e58809c37dad25bc3341da3e5`)
          .then((resp) => resp.json())
          .then((data) => {
            this.setState({
              playing: data.results,
              backUpPlaying: data.results,
              loading: false
            });
          })
          .catch((error) => {
            console.log(error);
            this.setState({ loading: false });
          });
      }
      handleViewMore() {
        this.setState({ loading: true });
      
        fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=d9e8474e58809c37dad25bc3341da3e5&language=en-US&page=${this.state.numeroPag}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              playing: this.state.playing.concat(data.results),
              backUpPlaying: this.state.backUpPlaying.concat(data.results),
              numeroPag: this.state.numeroPag + 1,
              loading: false
            });
          })
          .catch((e) => {
            console.log(e);
            this.setState({ loading: false });
          });
      }
      
    handleResetFilter() {
        this.setState({
        filterValue: "",
        pelisFiltrado: this.state.pelis,
        });
    }
    handleFilter(e) {
        const userValue = e.target.value;
        this.setState({
        filterValue: userValue,
        playing: this.state.backUpPlaying.filter((pelis) =>
            pelis.title.toLowerCase().includes(userValue.toLowerCase())
        ),
        });
    }

   
    componentDidUpdate(){
        console.log(this.state.playing);  
    }

    filtrarPeliculas(busquedaPelicula){
        const peliculasBusqueda = this.state.backUpPlaying.filter((elem) => 
            elem.title.toLowerCase().includes(busquedaPelicula.toLowerCase()))
        this.setState({playing: peliculasBusqueda})
    }

    render(){
        
        return(
            <>
                <h1 className="hUnoHome">Las que se vienen...</h1>
                <Buscador filtro ={(busqueda) => this.filtrarPeliculas(busqueda)}/>

                <section>

                    {                        
                        this.state.playing.length === 0 ?
                        <h1>Lo sentimos, en esta seccion no se encontraron reultados para su busqueda</h1>
                        :
                        this.state.playing.map((elm, idx) => 
                        <Peliculas pelis={elm} key={idx + elm.id} /> )                      

                    }
                </section>
                {!this.state.filterValue ? (
                <button onClick={() => this.handleViewMore()}>Ver más</button>
              ) : (
                ""
              )}               
            {this.state.loading && <Loader />}


            </>

        )
        
    }

}



export default upcoming