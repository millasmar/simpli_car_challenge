import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductsContainer from "./containers/ProductsContainer";
import Layout from "./containers/Layout";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/productos" component={ProductsContainer} />
      <Route exact path="/producto" component={ProductsContainer} />
    </Switch>
  );
}
export default App;
