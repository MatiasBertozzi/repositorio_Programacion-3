import React, {Component} from 'react';
import "./Buscador.css"
class Buscador extends Component{

    constructor(props){
        super(props)
        this.state = {
            valorInput: ""
        }
    };
    manejarSubmit(evento){
        evento.preventDefault();

    };
    controlarInput(evento){
        console.log("Esto es lo que llega por el evento", evento)
        this.setState({valorInput: evento.target.value},
            ()=> this.props.filtro(this.state.valorInput)
        )

    };

    render(){
        return(
            <form onSubmit={(evento) => this.manejarSubmit(evento) } className='form-buscador' >
                <input className='form-input' placeholder='Buscar pelicula'
                    onChange={(evento) => this.controlarInput(evento)} 
                    value={this.state.valorInput}
                /> 

            </form>
        )

    };

}
export default Buscador;