import React from "react";
import Products from "../components/Products";
import Layout from "../containers/Layout";

function ProductsContainer({ products }) {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <Layout>
      <Products handleClick={handleClick} products={products}></Products>
    </Layout>
  );
}

export default ProductsContainer;
