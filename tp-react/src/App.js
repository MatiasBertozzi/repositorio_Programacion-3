import React from "react";
import {Switch, Route } from 'react-router-dom'

import Header from "./components/Header/Header";
import Movies from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Favorites from "./screens/Favorites/Favorites";
import Peliculas from "./components/peliculas/peliculas";
import Buscador from "./components/Buscador/Buscador";
import Detalle from "./screens/Detalle/Detalle";
import Popular from "./components/Popular/Popular";
import upcoming from "./components/UpComing/UpComing";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Movies} />       
        <Route path="/movie/:id" component={Peliculas} />
        <Route path="/busqueda" component={Buscador} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/viewall/popular" component={Popular} />
        <Route path="/viewall/upComing" component={upcoming} />
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
// <Route path="/viewall/:name" component={ViewAllMovies} />