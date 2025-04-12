import React from "react";
import {Switch, Route } from 'react-router-dom'

import Header from "./components/Header/Header";
import Movies from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Favorites from "./screens/Favorites/Favorites";
import Peliculas from "./components/peliculas/peliculas";
import ViewAllMovies from "./screens/home/ViewAllMovies";
import SearchResults from "./screens/home/SearchResults";
import Detalle from "./screens/Detalle/Detalle";




function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/viewall/:name" component={ViewAllMovies} />
        <Route path="/movie/:id" component={Peliculas} />
        <Route path="/search" component={SearchResults} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/detalle/:id" component={Detalle} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
