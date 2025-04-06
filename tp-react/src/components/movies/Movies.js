import React, { Component } from "react";



class Movies extends Component {


    constructor(){
        super();
        this.state={
           valor:0,
        }
    }


    apiCall(url,consecuencia){
        fetch(url)
        .then(resp=> resp.json())
        .then(data =>consecuencia(data))
        .catch(err=>console.log(err))
    };

    componentDidMount(){
        console.log("me monte")
       this.apiCall(`https://api.themoviedb.org/3/movie/popular?api_key=d9e8474e58809c37dad25bc3341da3e5`, this.datos);

    }

    datos =(data)=>{
        this.setState({info:data.data})
        
    }
    componentDidUpdate(){
        console.log("me actualice");
        
    }
    render(){
     
        console.log("estoy renderizado");

        return(
            <div>
                <p>{this.setState.info}</p>
            </div>
        )
        
    }

}



export default Movies