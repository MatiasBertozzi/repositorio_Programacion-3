import { Component } from "react";
import Peliculas from "./components/peliculas/peliculas";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
  }
  render() {
    return (
      <>
        <Peliculas id={this.state.id} />
      </>
    );
  }
}

export default MovieDetail;
