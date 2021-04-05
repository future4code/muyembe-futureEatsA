import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import SimpleBottomNavigation from '../components/barraInferior/bottomBar'
import SearchPage from "../pages/SearchPage/SearchPage";
import Address from "../pages/Register/Address"
import PaginaLogin from "../pages/PaginaLogin/paginaLogin";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import PerfilPage from '../pages/PerfilPage/PerfilPage'
import Cart from "../pages/CartPage/Cart";

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
          <Address/>
        </Route>
        <Route exact path="/home">
          {/* <App /> */}
        </Route>
        <Route exact path="/carrinho">
         <Cart/>
         <SimpleBottomNavigation />
        </Route>
        <Route exact path="/busca">
          <SearchPage/>
          <SimpleBottomNavigation />
        </Route>

        <Route exact path="/restaurante">
          <RestaurantPage />
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
