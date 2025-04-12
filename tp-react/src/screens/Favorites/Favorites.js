import { Component } from "react";
import "./Favorites.css"

import Peliculas from "../../components/peliculas/peliculas";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelis: [],
      isLoading: true,
      peliculasFavoritas:[]
    };
  }
  /* favoritos va a ser un array que hay que traducir para luego poder utlizar los ids */
  componentDidMount(){
    const storageFavorito= localStorage.getItem("Favoritos")
    if (storageFavorito !== null) {
      let arrayParseado= JSON.parse(storageFavorito)
      if (arrayParseado.length > 0) {
        Promise.all( arrayParseado.map((elm) => {
          fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=d9e8474e58809c37dad25bc3341da3e5`)
            .then((resp) => resp.json())
            .then((data) => {
              this.setState({
                peliculasFavoritas: this.state.peliculasFavoritas.concat(data)
              }, () => console.log("estado de favoritos", this.state.peliculasFavoritas));
            })
            .catch((e) => console.log(e));
        }))
  .then((data)=>console.log("data del promiseAll" , data)
  )
        
      }
    }
    
  }

  render() {   
    return (
       <>
      <section>
        {this.state.peliculasFavoritas.length > 0 ? (
          <>
            <h2>Tus peliculas favoritas</h2>
            {this.state.peliculasFavoritas.length ===0?
            <p>Cargando</p>:
            this.state.peliculasFavoritas.map((elm,idx)=><Peliculas pelis={elm} key={idx + elm.id}  />)
            }
            
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
