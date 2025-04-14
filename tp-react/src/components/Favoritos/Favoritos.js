import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state={
          pelis:props.pelis,
          mostrarContenido:false,
          favorito: true 
        }
    }
    ocultar() {
      this.setState({
          mostrarContenido: !this.state.mostrarContenido
      })
  }

  componentDidMount(){
  let storage= localStorage.getItem('Favoritos')
 
  if(storage !== null){
    let storageParseado = JSON.parse(storage)
    let estaMiId = storageParseado.includes(this.state.pelis.id)

    if(estaMiId){
      this.setState({favorito: false})
    }}}

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
    this.setState({favorito: true});

    if (this.props.quitar !== undefined) {
        this.props.quitar(id)
      }
      
    
    }




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
                 <li><Link to = {`/detalle/${this.state.pelis.id}`}> 
                <button className='boton'>Ir a detalle</button>
                 </Link> </li>
                <li>{ this.state.favorito?
                <button className='boton' onClick={()=> this.agregarFavoritos(this.state.pelis.id)}> Agregar a Favoritos</button>:
                <button className='boton' onClick={()=> this.sacarFavoritos(this.state.pelis.id)}> Quitar de Favoritos</button>
                }
                </li>
            </div>
        </div>
</> 
    )
  }

 
  
}


