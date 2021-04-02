import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import SimpleBottomNavigation from '../components/barraInferior/bottomBar'
import SearchPage from "../pages/SearchPage/SearchPage";

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path="/login">
          {/* <App /> */}
        </Route>
        <Route exact path="/cadastro">
          {/* <App /> */}
        </Route>
        <Route exact path="/home">
          {/* <App /> */}
        </Route>
        <Route exact path="/carrinho">
          {/* <App /> */}
        </Route>
        <Route exact path="/busca">
            <SearchPage/>
        </Route>
      </Switch>
      <SimpleBottomNavigation /> 
    </BrowserRouter>
  );
};

export default Router;
