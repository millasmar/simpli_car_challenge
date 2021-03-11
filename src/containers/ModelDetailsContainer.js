import React, { useEffect, useState } from "react";
import { useParams, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../store/action-creators/products";
import ModelDetails from "../components/ModelDetails";
import Layout from "../containers/Layout";

function ModelDetailsContainer() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => {
    return state.products.selected;
  });

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  return (
    <Layout>
      <Route
        exact
        path={`/producto/${product.id}`}
        render={() => <ModelDetails product={product} />}
      />
    </Layout>
  );
}
export default ModelDetailsContainer;
