import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchProducts } from "./store/action-creators/products";
import ProductsContainer from "./containers/ProductsContainer";
import ModelDetailsContainer from "./containers/ModelDetailsContainer";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.products.list;
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/productos"
        render={() => <ProductsContainer products={products} />}
      />
      <Route
        exact
        path="/producto/:productId"
        component={ModelDetailsContainer}
      />
    </Switch>
  );
}
export default App;
