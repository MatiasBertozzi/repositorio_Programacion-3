import React, { Component } from 'react'

export default class Peliculas extends Component {

    constructor(props){
        super(props)
        this.state={pelis:props.pelis}
    }

  render() {
    console.log(this.state.pelis);
    return (
     <>
        <div>
            <img src={`https://image.tmdb.org/t/p/w185${this.state.pelis.poster_path}`}/>
            <p>Titulo: {this.state.pelis.title}</p>
            <p>descripcion: {this.state.pelis.overview}</p>
            <ul>
                <li><a>Ver descripcion</a></li>
                <li><a>Ir a detalle</a></li>
                <li><a>Agregar/quitar favorito</a></li>
            </ul>
        </div>
</>
    )
  }
}
