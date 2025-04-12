import { Component } from "react";


import Peliculas from "../../components/peliculas/peliculas";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelis: [],
      isLoading: true,
      id:""
    };
  }
   componentDidMount() {
    

    /* favoritos a a ser un array que hay que traducir para luego poder utlizar los ids */
    const favoritos = localStorage.getItem("Favoritos");
     const parsedFavoritos = JSON.parse(favoritos);
    if ( parsedFavoritos!== null) {
this.setState({
      id:parsedFavoritos
    });
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=709280f7a436019eb21b72bc1317fa78`)
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              pelis: data,
              isLoading: false,
            }))
        .catch((e) => console.log(e));
    }
  } 
  render() {
    return (
      <>
      <section>
        {this.state.pelis.length > 0 ? (
          <>
            <h2>Tus peliculas favoritas</h2>
            {this.state.id ===0?
            <p>Cargando</p>:
            this.state.id.map((elm)=><Peliculas pelis={this.state.pelis} />)
            
            
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
