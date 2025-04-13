import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loader: true });
    }, 1500);
  }

  render() {
    let elemento;
    
    if (!this.state.loader) {
      elemento = (
        <img className="gif-loader"
          src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
          alt="Cargando..."
          width={300}/>

      );
    }

    return (
      <div className="div-loader"> {elemento}
      </div>
    );
  }
}

export default Loader;