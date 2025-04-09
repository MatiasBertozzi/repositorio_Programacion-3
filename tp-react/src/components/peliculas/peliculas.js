import React, { Component } from 'react'
import "./peliculas.css"

export default class Peliculas extends Component {

    constructor(props){
        super(props)
        this.state={pelis:props.pelis}
    }

  render() {
    console.log(this.state.pelis);
    return (
     <>
        <div className='pelicula'>
            <img className='portada' src={`https://image.tmdb.org/t/p/w185${this.state.pelis.poster_path}`}/>
            <p>Titulo: {this.state.pelis.title}</p>
            <p>descripcion: {this.state.pelis.overview}</p>
            <ul className='botones'>
                <li className='boton'><a>Ver descripcion</a></li>
                <li className='boton'><a>Ir a detalle</a></li>
                <li className='boton'><a>Agregar/quitar favorito</a></li>
            </ul>
        </div>
</>
    )
  }
}
