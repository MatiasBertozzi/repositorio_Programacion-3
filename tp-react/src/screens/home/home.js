/*import React, {Component} from "react";

class Movies extends Component {
    constructor(props){
        super(props);
        this.state={
           info:[],
           playing:[]
        }
    }
    render(){
        return(
            <h1> Estas son mis peliculas</h1>

        )

    }        
    
}
export default Movies;*/


function Home() {


    return(
        <React.Fragment>
                
            <form>
                <input type="text"></input>
            </form>
            <section>

                <p>titulo</p>
                <p>descripcion</p>
                <button> Ver descripcion</button>
                <button> Ir a detalle</button>
                <button> "agregar / quitar de favoritos". </button>

            </section>     
                    
        </React.Fragment>
    );
}

export default Home 