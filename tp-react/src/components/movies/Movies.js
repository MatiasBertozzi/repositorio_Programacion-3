import React, { Component } from "react";

apiKey=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWU4NDc0ZTU4ODA5YzM3ZGFkMjViYzMzNDFkYTNlNSIsIm5iZiI6MTY5OTM1MjEyOC40MDIsInN1YiI6IjY1NGEwZTQwNDM0OTRmMDEwMWM5ODhhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y5TGRfZJ-nFZhgyVX_Dmz2twTKfe_FwFkVHVisjvCqg


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
        .then(resp =>console.log(resp.data.results))
        .catch(err=>console.log(err))
    };

    componentDidMount(){
        console.log("me monte")
        this.apiCall(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, options)

    }

}



export default Movies