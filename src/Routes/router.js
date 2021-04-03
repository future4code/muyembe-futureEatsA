import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import SimpleBottomNavigation from '../components/barraInferior/bottomBar'
import SearchPage from "../pages/SearchPage/SearchPage";
import Register from "../pages/Register/Register"
import PaginaLogin from "../pages/PaginaLogin/paginaLogin";
import PerfilPage from '../pages/PerfilPage/PerfilPage'

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path="/login">          
          <PaginaLogin/>
        </Route>
        <Route exact path="/cadastro">
          <Register/>
          <SimpleBottomNavigation /> 
        </Route>
        <Route exact path="/home">
          {/* <App /> */}
        </Route>
        <Route exact path="/carrinho">
          {/* <App /> */}
        </Route>
        <Route exact path="/busca">
          <SearchPage/>
          <SimpleBottomNavigation /> 
        </Route>
        <Route exact path="/perfil">
          <PerfilPage/>
          <SimpleBottomNavigation /> 
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
