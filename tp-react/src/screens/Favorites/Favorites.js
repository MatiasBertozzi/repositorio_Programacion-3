import { Component } from "react";
import "./Favorites.css"

import Favoritos from "../../components/Favoritos/Favoritos";
/* una vez que se monto el constructor, componentdidmount y el render, el codigo pasa a un estado entre el redner y componentdidupdate */

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelis: [],
      isLoading: true,
      peliculasFavoritas:[] /* array de objetos literales */
    };
  }
  /* favoritos va a ser un array que hay que traducir para luego poder utlizar los ids */
  componentDidMount(){
    
          const storageFavorito= localStorage.getItem("Favoritos")
    if (storageFavorito !== null) {
      let arrayParseado= JSON.parse(storageFavorito)
      if (arrayParseado.length > 0) {
        console.log('arrParseado', arrayParseado)
        Promise.all(arrayParseado.map((elm) => {
          return fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=d9e8474e58809c37dad25bc3341da3e5`)
            .then((resp) => {
              return resp.json()})
            // .then((data) => {
            //   this.setState({
            //     peliculasFavoritas: this.state.peliculasFavoritas.concat(data)
            //   }, () => console.log("estado de favoritos", this.state.peliculasFavoritas));
            // })
            .catch((e) => console.log(e));
        }))
        .then((data)=>{
          console.log('datafavs', data)
          this.setState({
              peliculasFavoritas: data
             })}
            )
      } 
    }
  }

        QuitarPeliculasFavoritas(id){
        const peliculasFav= this.state.peliculasFavoritas.filter(elm=>elm.id !==id)
        this.setState({peliculasFavoritas:peliculasFav})
        }
  

  render() {   
    return (
       <>
      <section className="caja-section">
        {this.state.peliculasFavoritas.length > 0 ? (
          <>
            <h2 >Tus peliculas favoritas</h2>
          <div className="caja-padre">
            {this.state.peliculasFavoritas.length ===0?
            <p>Cargando</p>:
            this.state.peliculasFavoritas.map((elm,idx)=>
              // <h1>hola</h1>
            <Favoritos 
            quitar={(id)=>this.QuitarPeliculasFavoritas(id)} pelis={elm} key={idx + elm.id}/>
            )}
            </div>
          </>
        ) : (
          <h2>No tienes peliculas favoritas</h2>
        )}
      </section>
    </> 
  );
  }
}

export default Favorites;
