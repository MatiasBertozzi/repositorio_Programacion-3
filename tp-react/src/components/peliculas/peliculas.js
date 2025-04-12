import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./peliculas.css"

export default class Peliculas extends Component {

    constructor(props){
        super(props)
        this.state={
          pelis:props.pelis,
          mostrarContenido:false,
          
        }
    }

    ocultar() {
      this.setState({
          mostrarContenido: !this.state.mostrarContenido
      })
  }
  /* la navegacion se puede realizar mediante Link o por la libreria de React-router-dom,
  que ofrece metodos para lograr esto, para eso necesitamos que lleguen las props de la libreria*/


  render() {     
    return (
     <>
        <div className='pelicula'>
            <img className='portada' src={`https://image.tmdb.org/t/p/w185${this.state.pelis.poster_path}`}/>
            <p>Titulo: {this.state.pelis.title}</p>
            <p className={this.state.mostrarContenido ? '' : 'hide'}>Descripcion: {this.state.pelis.overview}</p>
            <div className='botones'>
            {this.state.mostrarContenido ?  
                <li><button className='boton' onClick={() => this.ocultar()}>Ocultar descripcion</button></li>: 
                <li><button className='boton' onClick={() => this.ocultar()}>Ver descripcion</button></li>}
                 <Link to = {`/detalle/${this.state.pelis.id}`}> 
                <li><button className='boton'>Ir a detalle</button></li>
                 </Link> 
                <li><button className='boton'><a>Agregar/quitar favorito</a></button></li>
            </div>
        </div>
</>
    )
  }
}
