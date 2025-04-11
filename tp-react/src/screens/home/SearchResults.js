import { Component } from "react";
import Peliculas from "../../components/peliculas/peliculas";


class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelis: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=33e10f642f640258287c658cad162391`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          this.setState({
            pelis: data.results,
            isLoading: false,
          });
        }, 500);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        <section>
          {!this.state.isLoading ? (
            <>
              <h2>Resultados para "{this.props.location.state.query}"</h2>
              {this.state.pelis.length > 0 ? (
                <Peliculas pelis={this.state.pelis} />
              ) : (
                <h2>
                  No hay resultados para tu busqueda "
                  {this.props.location.state.query}"
                </h2>
              )}
            </>
          ) : (
            <null />
          )}
        </section>
      </>
    );
  }
}

export default SearchResults;
