import React, { Component } from 'react'
import "./Detalle.css"


export default class Detalle extends Component {

    constructor(props){
        super(props)
        this.state={
            info:[],
            favorito: true,
        }
    }

    componentDidMount(){
        let id= this.props.match.params.id
       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d9e8474e58809c37dad25bc3341da3e5`)
        .then((resp)=> resp.json())
        .then((data)=>{
            console.log(data) 
            this.setState({info:data})})
        .catch((error) => console.log(error) )
    
        let storage= localStorage.getItem('Favoritos')
        /* si el storage no es nulo quiere decir que hay un elemento, en este caso lo "traducimos" 
        a un lenguaje que podamos usar y luego lo guardamos en una variable */
        if(storage !== null){
          let storageParseado = JSON.parse(storage)
          let estaMiId = storageParseado.includes(this.state.info.id)
  
          if(estaMiId){
            this.setState({favorito: true})
          }
        }
    }


    agregarFavoritos(id){
        let storage = localStorage.getItem('Favoritos')
        if(storage !== null){
          let arrParseado = JSON.parse(storage)
          arrParseado.push(id)
          let arrStringificado = JSON.stringify(arrParseado)
          localStorage.setItem('Favoritos', arrStringificado)
        } else {
          let primerID = [id]
          let arrStringificado = JSON.stringify(primerID)
          localStorage.setItem('Favoritos', arrStringificado)
        }
        this.setState({
            favorito: false

        })
    }
    

    sacarFavoritos(id){
        const storage = localStorage.getItem('Favoritos')
        const storageParseado = JSON.parse(storage)
        const filtrarStorage = storageParseado.filter((elm) => elm !== id )
        const storageStringificado = JSON.stringify(filtrarStorage)
        localStorage.setItem('Favoritos', storageStringificado)
    
        this.setState({favorito: true})

        }

  render() {
    return (
      <>
      <div className='padre'> 
        <img className='imagen-detalle' src={`https://image.tmdb.org/t/p/w300${this.state.info.poster_path}`}/>
        <div className='botones'>
        <p>Titulo:{this.state.info.title}</p>
        <p>Rating:{this.state.info.vote_average}</p>
        <p>Fecha de estreno:{this.state.info.release_date}</p>
        <p>Duracion:{this.state.info.runtime}</p>
        <p>Sinopsis:{this.state.info.overview}</p>
        <p>Genero:{
            this.state.info.genres 
            ? this.state.info.genres.map((genre, idx) => (
                <li key={genre.id}> 
                    {genre.name +" "} 
                </li>
                )) : "Cargando..."}</p> 

                { this.state.favorito?
                <button className='bot' onClick={()=> this.agregarFavoritos(this.props.match.params.id)}> Agregar a Favoritos</button>:
                <button className='bot' onClick={()=> this.sacarFavoritos(this.props.match.params.id)}> Quitar de Favoritos</button>}
        </div>
      </div>
      </>
    )
  }

}

 