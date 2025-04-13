import React, { Component } from "react";
import Peliculas from "../peliculas/peliculas";
import Buscador from "../Buscador/Buscador";
import Loader from "../Loader/Loader";
//import "./Home.css"

class Popular extends Component {
    constructor(props){
        super(props);
        this.state={
           info:[],
           numeroPag: 2,
           backupInfo: [],
           filterValue:"",
           pelisFiltrado:[],  
           loading: false         

        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d9e8474e58809c37dad25bc3341da3e5`)
          .then((resp) => resp.json())
          .then((data) => {
            this.setState({
              info: data.results,
              backupInfo: data.results,
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
          `https://api.themoviedb.org/3/movie/popular?api_key=d9e8474e58809c37dad25bc3341da3e5&language=en-US&page=${this.state.numeroPag}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              info: this.state.info.concat(data.results),
              backupInfo: this.state.backupInfo.concat(data.results),
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
        info: this.state.backupInfo.filter((pelis) =>
            pelis.title.toLowerCase().includes(userValue.toLowerCase())
        ),
        });
    }

   
    componentDidUpdate(){
        console.log(this.state.info);  
    }

    filtrarPeliculas(busquedaPelicula){
        const peliculasBusqueda = this.state.backupInfo.filter((elem) => 
            elem.title.toLowerCase().includes(busquedaPelicula.toLowerCase()))
        this.setState({info: peliculasBusqueda})
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
                        this.state.info.map((elm, idx) => 
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



export default Popular